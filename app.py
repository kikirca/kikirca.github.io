# app.py
from flask import Flask, request, jsonify, send_file, render_template
from datetime import datetime, timedelta
import os
import yt_dlp
import uuid
import threading
from werkzeug.utils import secure_filename
import time

app = Flask(__name__)
# Configure file expiration time (5 minutes by default)
FILE_EXPIRATION_TIME = int(os.getenv('FILE_EXPIRATION_TIME', 300))
app.config['UPLOAD_FOLDER'] = os.path.abspath('downloads')

# Ensure the upload folder exists and has proper permissions
def setup_upload_folder():
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        try:
            os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
            print(f"Created upload folder at: {app.config['UPLOAD_FOLDER']}")
        except Exception as e:
            print(f"Error creating upload folder: {str(e)}")
            raise

    # Verify write permissions
    try:
        test_file = os.path.join(app.config['UPLOAD_FOLDER'], 'test_write')
        with open(test_file, 'w') as f:
            f.write('test')
        os.remove(test_file)
    except Exception as e:
        print(f"Error verifying upload folder permissions: {str(e)}")
        raise

setup_upload_folder()

download_tasks = {}

class FileCleanupManager:
    def __init__(self, directory, expiration_time):
        self.directory = directory
        self.expiration_time = expiration_time
        self.cleanup_interval = 60  # Fixed 60 second interval
        self._stop_event = threading.Event()
        self.thread = threading.Thread(target=self._cleanup_loop, daemon=True)
        self.file_timestamps = {}  # Track when files were created
        self.downloaded_files = {}  # Track if files have been downloaded
        self.playlist_dirs = set()  # Track playlist directories
        
    def start(self):
        self.thread.start()
        
    def stop(self):
        self._stop_event.set()
        self.thread.join()
    
    def add_file(self, filepath):
        """Add a file to be tracked for cleanup"""
        self.file_timestamps[filepath] = time.time()
        self.downloaded_files[filepath] = False
        
    def mark_downloaded(self, filepath):
        """Mark a file as successfully downloaded"""
        if filepath in self.file_timestamps:
            self.downloaded_files[filepath] = True
            # Reset the timestamp to when it was downloaded
            self.file_timestamps[filepath] = time.time()
            
    def add_playlist_dir(self, dir_path):
        """Add a playlist directory to be tracked for cleanup"""
        self.playlist_dirs.add(dir_path)
        
    def _cleanup_loop(self):
        while not self._stop_event.is_set():
            self.cleanup_files()
            self._stop_event.wait(self.cleanup_interval)
    
    def cleanup_files(self):
        """Delete expired files and playlist directories from the directory"""
        now = time.time()
        try:
            # First, clean up any files that aren't being tracked
            for filename in os.listdir(self.directory):
                file_path = os.path.join(self.directory, filename)
                if file_path not in self.file_timestamps and os.path.isfile(file_path):
                    try:
                        os.remove(file_path)
                        print(f"Deleted untracked file: {filename}")
                    except OSError as e:
                        print(f"Error deleting untracked file {filename}: {e}")
            
            # Then check tracked files
            expired_files = []
            for file_path, timestamp in self.file_timestamps.items():
                # Only delete if file has been downloaded or has exceeded double the expiration time
                if (self.downloaded_files.get(file_path) and now - timestamp > self.expiration_time) or \
                   (now - timestamp > self.expiration_time * 2):
                    if os.path.exists(file_path):
                        try:
                            os.remove(file_path)
                            print(f"Deleted expired file: {os.path.basename(file_path)}")
                        except OSError as e:
                            print(f"Error deleting file {os.path.basename(file_path)}: {e}")
                    expired_files.append(file_path)
            
            # Clean up playlist directories
            expired_dirs = set()
            for dir_path in self.playlist_dirs:
                if not os.path.exists(dir_path):
                    expired_dirs.add(dir_path)
                    continue
                    
                # Get the directory creation time
                dir_timestamp = os.path.getctime(dir_path)
                if now - dir_timestamp > self.expiration_time:
                    try:
                        import shutil
                        shutil.rmtree(dir_path, ignore_errors=True)
                        print(f"Deleted expired playlist directory: {os.path.basename(dir_path)}")
                        expired_dirs.add(dir_path)
                    except Exception as e:
                        print(f"Error deleting playlist directory {os.path.basename(dir_path)}: {e}")
            
            # Remove expired items from tracking
            for file_path in expired_files:
                self.file_timestamps.pop(file_path, None)
                self.downloaded_files.pop(file_path, None)
            
            self.playlist_dirs -= expired_dirs
                
        except Exception as e:
            print(f"Error during cleanup: {e}")

# Initialize the cleanup manager with a longer expiration time (10 minutes)
cleanup_manager = FileCleanupManager(app.config['UPLOAD_FOLDER'], 600)  # 600 seconds = 10 minutes
cleanup_manager.start()

def validate_url(url):
    """Basic URL validation"""
    try:
        if not url:
            return False, "Please enter a URL"
            
        if not url.startswith(('http://', 'https://')):
            return False, "URL must start with http:// or https://"
            
        return True, None
    except Exception:
        return False, "Invalid URL format"

def get_available_formats(url, mode='video', is_playlist=False):
    # Validate URL first
    is_valid, error_message = validate_url(url)
    if not is_valid:
        return None, error_message

    if mode == 'audio':
        return {
            'formats': [{
                'format_id': 'bestaudio',
                'resolution': 'Best Quality (MP3)',
                'filesize': 'N/A'
            }],
            'video_info': {
                'title': 'Audio Download',
                'thumbnail': '',
                'duration': 0,
                'channel': ''
            }
        }, None

    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'extract_flat': True if is_playlist else False,
        'youtube_include_dash_manifest': False
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info = ydl.extract_info(url, download=False)
            
            if is_playlist:
                # Handle playlist information
                playlist_info = {
                    'title': info.get('title', 'Unknown Playlist'),
                    'video_count': len(info.get('entries', [])),
                    'url': url,  # Add the URL to playlist info
                    'entries': [
                        {
                            'id': entry.get('id', ''),
                            'title': entry.get('title', 'Unknown Title'),
                            'duration': entry.get('duration', 0),
                            'thumbnail': get_best_thumbnail(entry)
                        }
                        for entry in info.get('entries', []) if entry
                    ]
                }
                
                # Get format information from the first video
                if playlist_info['entries']:
                    first_video = playlist_info['entries'][0]
                    first_video_url = f"https://www.youtube.com/watch?v={first_video['id']}"
                    first_video_info = ydl.extract_info(first_video_url, download=False)
                    formats = process_formats(first_video_info)
                    return {
                        'formats': formats,
                        'playlistInfo': playlist_info,
                        'isPlaylist': True
                    }, None
                else:
                    return None, "No videos found in playlist"
            else:
                # Single video information
                formats = process_formats(info)
                video_info = {
                    'title': info.get('title', 'Unknown Title'),
                    'thumbnail': get_best_thumbnail(info),
                    'duration': info.get('duration', 0),
                    'channel': info.get('channel', 'Unknown Channel')
                }
                return {
                    'formats': formats,
                    'video_info': video_info,
                    'isPlaylist': False
                }, None

        except Exception as e:
            print(f"Error extracting video info: {str(e)}")
            return None, f"Error: {str(e)}"

def process_formats(info):
    formats = []
    seen_formats = set()
    
    sorted_formats = sorted(info['formats'], 
                          key=lambda x: x.get('filesize', 0) if x.get('filesize') is not None else 0,
                          reverse=True)
    
    for f in sorted_formats:
        if f.get('vcodec') != 'none':
            resolution = f.get('resolution', 'N/A')
            format_key = f"{resolution}"
            if format_key not in seen_formats:
                seen_formats.add(format_key)
                formats.append({
                    'format_id': f['format_id'],
                    'resolution': resolution,
                    'filesize': format_filesize(f.get('filesize', 0))
                })
    
    return formats

def get_best_thumbnail(info):
    thumbnail_url = ''
    if info.get('thumbnail'):
        thumbnail_url = info['thumbnail']
    elif info.get('thumbnails'):
        # Sort thumbnails by quality and prefer HTTPS
        thumbnails = sorted(info['thumbnails'], 
                          key=lambda x: (x.get('height', 0) if x.get('height') is not None else 0,
                                      x.get('url', '').startswith('https')),
                          reverse=True)
        if thumbnails:
            thumbnail_url = thumbnails[0].get('url', '')
    
    # Convert HTTP to HTTPS if needed
    if thumbnail_url.startswith('http://'):
        thumbnail_url = 'https://' + thumbnail_url[7:]
    
    return thumbnail_url

def format_filesize(size):
    if not size or size == 'N/A':
        return 'N/A'
    
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size < 1024.0:
            if unit == 'B':
                return f"{size:.0f} {unit}"
            return f"{size:.2f} {unit}"
        size /= 1024.0
    return f"{size:.2f} TB"

def download_video(url, format_id, task_id, mode='video', selected_videos=None):
    extension = 'mp3' if mode == 'audio' else 'mp4'
    base_output_file = os.path.join(app.config['UPLOAD_FOLDER'], f"{task_id}")
    
    if mode == 'audio':
        # Special handling for audio downloads
        output_file = f"{base_output_file}.{extension}"
        ydl_opts = get_ydl_opts(output_file, format_id, task_id, mode)
        
        try:
            # Update initial state
            if task_id in download_tasks:
                download_tasks[task_id].update({
                    'stage': 'Starting audio download...',
                    'progress': 0,
                    'mode': 'audio',
                    'url': url
                })
            
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                download_tasks[task_id]['stage'] = 'Fetching audio information...'
                info = ydl.extract_info(url, download=True)
                if info is None:
                    raise Exception("Could not access the audio content")
                
                # Get the actual output file path after download
                downloaded_files = [f for f in os.listdir(app.config['UPLOAD_FOLDER']) 
                                 if f.startswith(task_id) and f.endswith('.mp3')]
                
                if downloaded_files:
                    final_output = os.path.join(app.config['UPLOAD_FOLDER'], downloaded_files[0])
                    if task_id in download_tasks:
                        download_tasks[task_id].update({
                            'status': 'completed',
                            'file_path': final_output,
                            'progress': 100,
                            'stage': 'Audio download completed'
                        })
                    cleanup_manager.add_file(final_output)
                else:
                    raise Exception("Could not find downloaded audio file")
        except Exception as e:
            handle_download_error(e, task_id, mode)
            return

    elif selected_videos:
        # Create a unique directory for playlist downloads
        playlist_dir = f"{base_output_file}_playlist_{int(time.time())}"
        os.makedirs(playlist_dir, exist_ok=True)
        
        download_tasks[task_id].update({
            'total_videos': len(selected_videos),
            'current_video': 0,
            'failed_videos': []
        })
        
        # Handle individual video formats
        video_formats = format_id if isinstance(format_id, dict) else {}
        
        for video_id in selected_videos:
            video_url = f"https://www.youtube.com/watch?v={video_id}"
            video_format = video_formats.get(video_id, 'best')
            video_output = os.path.join(playlist_dir, f"%(title)s.{extension}")
            
            download_tasks[task_id].update({
                'current_video': download_tasks[task_id]['current_video'] + 1,
                'stage': f"Downloading video {download_tasks[task_id]['current_video']}/{len(selected_videos)}"
            })
            
            try:
                ydl_opts = get_ydl_opts(video_output, video_format, task_id, mode)
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    ydl.download([video_url])
            except Exception as e:
                print(f"Error downloading video {video_id}: {str(e)}")
                download_tasks[task_id]['failed_videos'].append({
                    'id': video_id,
                    'error': str(e)
                })
        
        # Create a zip file of the playlist
        try:
            import shutil
            zip_file = f"{base_output_file}.zip"
            shutil.make_archive(base_output_file, 'zip', playlist_dir)
            
            if os.path.exists(zip_file):
                download_tasks[task_id].update({
                    'status': 'completed',
                    'file_path': zip_file,
                    'progress': 100,
                    'stage': 'Playlist download completed'
                })
                cleanup_manager.add_file(zip_file)
                cleanup_manager.add_playlist_dir(playlist_dir)
                # Clean up playlist directory after zipping
                shutil.rmtree(playlist_dir, ignore_errors=True)
            else:
                raise Exception("Could not create playlist zip file")
        except Exception as e:
            print(f"Error creating zip file: {str(e)}")
            handle_download_error(e, task_id, mode)
            # Clean up playlist directory on error
            import shutil
            shutil.rmtree(playlist_dir, ignore_errors=True)
            
    else:
        # Single video download logic
        output_file = f"{base_output_file}.{extension}"
        ydl_opts = get_ydl_opts(output_file, format_id, task_id, mode)
        
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(url, download=True)
                if info is None:
                    raise Exception("Could not access the media content")
                
                # Get the actual output file path after download
                downloaded_files = [f for f in os.listdir(app.config['UPLOAD_FOLDER']) 
                                 if f.startswith(task_id) and f.endswith(f".{extension}")]
                
                if downloaded_files:
                    final_output = os.path.join(app.config['UPLOAD_FOLDER'], downloaded_files[0])
                    download_tasks[task_id].update({
                        'status': 'completed',
                        'file_path': final_output,
                        'progress': 100,
                        'stage': 'Download completed'
                    })
                    cleanup_manager.add_file(final_output)
                else:
                    raise Exception("Could not find downloaded file")
        except Exception as e:
            handle_download_error(e, task_id, mode)

def get_ydl_opts(output_path, format_id, task_id, mode):
    def progress_hook(d):
        if task_id in download_tasks:
            if d['status'] == 'downloading':
                # Regular download progress
                update_progress(d, task_id)
            elif d['status'] == 'finished' and mode == 'audio':
                # Update progress for audio conversion
                download_tasks[task_id].update({
                    'stage': 'Converting to MP3...',
                    'progress': 95
                })

    ydl_opts = {
        'outtmpl': output_path,
        'format': format_id,
        'quiet': True,
        'no_warnings': True,
        'ignoreerrors': True,
        'progress_hooks': [progress_hook],
        'writethumbnail': False,
    }
    
    if mode == 'audio':
        ydl_opts.update({
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
            'extract_audio': True,
            'audio_format': 'mp3',
            'audio_quality': 0,
            'prefer_ffmpeg': True,
            'keepvideo': False,
            'postprocessor_args': [
                '-acodec', 'libmp3lame',
                '-ar', '44100',
                '-threads', '4'
            ],
        })
    else:
        ydl_opts.update({
            'format': f"{format_id}+bestaudio/best" if format_id else 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
            'merge_output_format': 'mp4',
        })
    
    return ydl_opts

def handle_download_error(e, task_id, mode):
    error_message = str(e).lower()
    user_message = "An error occurred during download. Please try again."

    if mode == 'audio':
        if any(x in error_message for x in ['unavailable', 'not available']):
            user_message = "This audio content is not available for download"
        elif 'private' in error_message:
            user_message = "This content is private or requires authentication"
        elif 'copyright' in error_message:
            user_message = "This content is not available due to copyright restrictions"
        elif 'error' in error_message or 'exception' in error_message:
            user_message = "Unable to process this audio. Please verify the URL and try again"
        elif 'permission' in error_message:
            user_message = "This content requires permission to access"
        elif 'rate limit' in error_message or 'too many requests' in error_message:
            user_message = "Download limit reached. Please try again later"
        elif 'network' in error_message or 'connection' in error_message:
            user_message = "Network error. Please check your connection and try again"
    
    print(f"Download error (internal): {str(e)}")
    download_tasks[task_id].update({
        'status': 'failed',
        'error': user_message,
        'stage': 'Download failed',
        'progress': 0
    })

def update_progress(d, task_id):
    if task_id in download_tasks:
        if d['status'] == 'downloading':
            total_bytes = d.get('total_bytes')
            downloaded_bytes = d.get('downloaded_bytes', 0)
            
            # Handle cases where total_bytes might be None (especially for audio downloads)
            if total_bytes is None and d.get('total_bytes_estimate'):
                total_bytes = d.get('total_bytes_estimate')
            
            # Calculate progress
            if total_bytes:
                progress = (downloaded_bytes * 100 / total_bytes)
            else:
                # If we can't calculate exact progress, use a simplified progress
                progress = min(95, (downloaded_bytes / (1024 * 1024)))  # Estimate based on MB downloaded
            
            # For playlist downloads
            if 'total_videos' in download_tasks[task_id]:
                total_videos = download_tasks[task_id]['total_videos']
                current_video = download_tasks[task_id]['current_video']
                overall_progress = ((current_video - 1) * 100 + progress) / total_videos
                download_tasks[task_id].update({
                    'progress': overall_progress,
                    'stage': f"Downloading video {current_video}/{total_videos} ({progress:.1f}%)"
                })
            else:
                # Single video/audio progress
                download_tasks[task_id].update({
                    'progress': progress,
                    'speed': d.get('speed_str', 'N/A'),
                    'eta': d.get('eta_str', 'N/A'),
                    'stage': f"Downloading... ({progress:.1f}%)"
                })
        
        elif d['status'] == 'finished':
            if 'total_videos' in download_tasks[task_id]:
                current_video = download_tasks[task_id]['current_video']
                total_videos = download_tasks[task_id]['total_videos']
                download_tasks[task_id].update({
                    'stage': f"Processing video {current_video}/{total_videos}..."
                })
            else:
                mode = download_tasks[task_id].get('mode', 'video')
                if mode == 'audio':
                    download_tasks[task_id].update({
                        'progress': 95,
                        'stage': 'Converting to MP3...'
                    })
                else:
                    download_tasks[task_id].update({
                        'progress': 95,
                        'stage': 'Processing...'
                    })

@app.route('/')
@app.route('/<lang>')
def index(lang='en'):
    # Validate language, default to 'en' if invalid
    supported_languages = ['en', 'ar', 'es', 'de', 'hi', 'ko']
    if lang not in supported_languages:
        lang = 'en'
    return render_template('index.html', current_lang=lang)

@app.route('/get-formats', methods=['POST'])
def get_formats():
    url = request.json.get('url')
    mode = request.json.get('mode', 'video')
    is_playlist = request.json.get('isPlaylist', False)
    
    # Validate URL first
    is_valid, error_message = validate_url(url)
    if not is_valid:
        return jsonify({'success': False, 'error': error_message})
    
    result, error = get_available_formats(url, mode, is_playlist)
    if error:
        return jsonify({'success': False, 'error': error})
    
    if result:
        response = {'success': True}
        if is_playlist and 'playlistInfo' in result:
            response.update({
                'isPlaylist': True,
                'playlistInfo': result['playlistInfo'],
                'formats': result['formats']
            })
        else:
            response.update({
                'isPlaylist': False,
                'formats': result['formats'],
                'video_info': result['video_info']
            })
        return jsonify(response)
    
    return jsonify({'success': False, 'error': 'Could not fetch media formats'})

@app.route('/download', methods=['POST'])
def start_download():
    data = request.json
    url = data.get('url')
    format_id = data.get('format_id')
    mode = data.get('mode', 'video')
    is_playlist = data.get('isPlaylist', False)
    selected_videos = None
    
    # Validate URL first
    is_valid, error_message = validate_url(url)
    if not is_valid:
        return jsonify({'success': False, 'error': error_message})
    
    task_id = str(uuid.uuid4())
    download_tasks[task_id] = {
        'status': 'processing',
        'mode': mode,
        'progress': 0,
        'speed': 'N/A',
        'eta': 'N/A',
        'stage': 'Initializing...',
        'url': url  # Add URL to the task data
    }

    if is_playlist:
        selected_videos = list(data.get('selectedVideos', []))
        video_formats = data.get('videoFormats', {})
        if not selected_videos or not video_formats:
            return jsonify({'success': False, 'error': 'Missing playlist selection data'})
        format_id = video_formats
    
    thread = threading.Thread(
        target=download_video, 
        args=(url, format_id, task_id, mode, selected_videos)
    )
    thread.start()
    
    return jsonify({'success': True, 'task_id': task_id})

@app.route('/status/<task_id>')
def get_status(task_id):
    task = download_tasks.get(task_id)
    if not task:
        return jsonify({'success': False, 'error': 'Task not found'})

    status = task.get('status', 'processing')
    progress = task.get('progress', 0)
    stage = task.get('stage', 'Processing...')
    error = task.get('error', None)
    mode = task.get('mode', 'video')

    # Ensure progress is always a number between 0 and 100
    try:
        progress = float(progress)
        progress = max(0, min(100, progress))
    except (TypeError, ValueError):
        progress = 0

    response = {
        'success': True,
        'status': {
            'status': status,
            'progress': progress,
            'stage': stage,
            'error': error,
            'mode': mode
        }
    }

    # Add playlist-specific information if available
    if 'total_videos' in task:
        response['status'].update({
            'total_videos': task['total_videos'],
            'current_video': task['current_video'],
            'failed_videos': task.get('failed_videos', [])
        })

    return jsonify(response)

@app.route('/download-file/<task_id>')
def download_file(task_id):
    task = download_tasks.get(task_id)
    if not task:
        return jsonify({'success': False, 'error': 'Task not found'})
    
    if task['status'] != 'completed':
        return jsonify({'success': False, 'error': 'Download not completed yet'})
    
    if 'file_path' not in task:
        return jsonify({'success': False, 'error': 'File path not found in task data'})
    
    file_path = task['file_path']
    
    if not os.path.exists(file_path):
        return jsonify({'success': False, 'error': f'File not found at {file_path}'})
    
    try:
        # Get the filename from the path
        filename = os.path.basename(file_path)
        
        # Mark the file as downloaded
        cleanup_manager.mark_downloaded(file_path)
        
        # Send the file
        return send_file(
            file_path,
            as_attachment=True,
            download_name=filename,
            mimetype='video/mp4' if file_path.endswith('.mp4') else 'audio/mp3'
        )
    except Exception as e:
        print(f"Error sending file: {str(e)}")
        return jsonify({'success': False, 'error': f'Error sending file: {str(e)}'})

if __name__ == '__main__':
    try:
        app.run(debug=True)
    finally:
        cleanup_manager.stop()  # Ensure cleanup stops when app stops
