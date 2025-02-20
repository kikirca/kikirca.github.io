const translations = {
    en: {
        downloadMedia: 'Download Videos and Audios',
        downloadDesc: 'Enter a video URL to get started',
        video: 'Video',
        audio: 'Audio',
        playlist: 'Playlist',
        pasteUrl: 'Paste your URL here',
        fetchFormats: 'download',
        howToDownloadTitle: 'How to Download',
        howToDownloadStep1: 'Copy the video URL from your browser\'s address bar',
        howToDownloadStep2: 'Paste the URL in the input box above',
        howToDownloadStep3: 'Click "Fetch Formats" and select your preferred quality',
        howToDownloadStep4: 'Click "Download" and wait for your video',
        article: {
            title: "Complete Guide to Video and Audio Downloading",
            toc: {
                title: "Table of Contents",
                overview: "Overview",
                features: "Key Features",
                usage: "How to Use",
                formats: "Supported Formats",
                optimization: "Optimization Tips",
                faq: "FAQ"
            },
            sections: {
                overview: {
                    title: "Overview",
                    content: "In today's digital age, having access to offline media content has become increasingly important. This guide will help you understand how to effectively download and manage your media files."
                },
                features: {
                    title: "Key Features",
                    videoTitle: "Video Downloads",
                    videoFeatures: [
                        "High-quality downloads up to 4K resolution",
                        "Multiple format support (MP4, WebM, MKV)",
                        "Flexible quality selection",
                        "Fast download speeds",
                        "Thumbnail preview support"
                    ],
                    audioTitle: "Audio Downloads",
                    audioFeatures: [
                        "High-quality MP3 conversion",
                        "Multiple bitrate options",
                        "Automatic format optimization",
                        "ID3 tag preservation",
                        "Batch processing support"
                    ]
                },
                usage: {
                    title: "How to Use",
                    steps: [
                        "Copy and paste the video URL",
                        "Select your preferred quality",
                        "Click download and wait for processing",
                        "Save the file to your device"
                    ],
                    tips: [
                        "Always check your storage space",
                        "Use a stable internet connection",
                        "Choose appropriate quality for your needs",
                        "Keep your downloads organized"
                    ]
                },
                formats: {
                    title: "Supported Formats",
                    video: {
                        title: "Video Formats",
                        content: "We support MP4, WebM, and MKV formats with resolutions ranging from 360p to 4K. All popular codecs are supported, including H.264 and VP9."
                    },
                    audio: {
                        title: "Audio Formats",
                        content: "High-quality MP3 conversion with bitrates up to 320kbps. We also support M4A and WAV formats for maximum compatibility."
                    }
                },
                optimization: {
                    title: "Optimization Tips",
                    tips: [
                        "Choose appropriate quality for your device",
                        "Consider storage space requirements",
                        "Use batch downloads when possible",
                        "Keep your downloads organized",
                        "Clean up temporary files regularly"
                    ]
                },
                faq: {
                    title: "FAQ",
                    questions: [
                        {
                            q: "What's the maximum available quality?",
                            a: "We support up to 4K resolution for videos and 320kbps for audio."
                        },
                        {
                            q: "How long do downloads take?",
                            a: "Download time depends on file size and your internet speed."
                        },
                        {
                            q: "Are downloads saved offline?",
                            a: "Yes, all downloads are saved locally on your device."
                        }
                    ]
                }
            }
        },
        previousPage: 'Previous',
        nextPage: 'Next',
        pageOf: 'Page {current} of {total}',
        selectAll: 'Select All',
        downloadSelected: 'Download Selected ({count})',
        noVideosSelected: 'Please select videos to download',
        processingPlaylist: 'Processing playlist...',
        downloadingVideo: 'Downloading video {current}/{total}',
        playlistDownloadComplete: 'Playlist download completed',
        selectFormat: 'Select format',
        downloadAnotherPlaylist: 'Download Another Playlist',
        downloadAnotherAudio: 'Download Another Audio',
        downloadAnotherVideo: 'Download Another Video',
        pleaseSelectFormat: 'Please select a format first',
        selectFormatHelp: 'Please select a format for each video you want to download',
        downloadError: 'Failed to start download. Please try again.',
        networkError: 'Network error while starting download',
        formatRequired: 'Please select a format before selecting videos',
        formatSelectLabel: 'Choose video quality:',
        selectionError: 'You must select a format before selecting this video',
        enterUrl: 'Please enter a URL',
        fetchError: 'Failed to fetch formats. Please check the URL and try again.',
        networkError: 'Network error occurred. Please check your connection.',
        download: 'Download',
        fileSize: 'File size',
        channel: 'Channel',
        duration: 'Duration',
        loading: 'Loading...',
        processing: 'Processing...',
        downloading: 'Downloading...',
        converting: 'Converting...',
        completed: 'Download completed',
        failed: 'Download failed',
        retryDownload: 'Retry Download',
        invalidUrl: 'Invalid URL format',
        downloadProgress: 'Download Progress: {progress}%',
        preparingDownload: 'Preparing download...',
        startingDownload: 'Starting download...',
        processingPlaylist: 'Processing playlist...',
        playlistProgress: 'Downloading video {current} of {total}',
        formatRequired: 'Please select a format before downloading',
    },
    ar: {
        downloadMedia: 'تحميل الفيديو والصوت',
        downloadDesc: 'أدخل رابط الفيديو للبدء',
        video: 'فيديو',
        audio: 'صوت',
        playlist: 'قائمة التشغيل',
        pasteUrl: 'الصق الرابط هنا',
        fetchFormats:'تحميل ',
        howToDownloadTitle: 'كيفية التحميل',
        howToDownloadStep1: 'انسخ رابط الفيديو من شريط العنوان في المتصفح',
        howToDownloadStep2: 'الصق الرابط في مربع الإدخال أعلاه',
        howToDownloadStep3: 'انقر على "جلب الصيغ" واختر الجودة المفضلة لديك',
        howToDownloadStep4: 'انقر على "تحميل" وانتظر اكتمال التحميل',
        article: {
            title: "دليل شامل لتحميل الفيديو والصوت",
            toc: {
                title: "جدول المحتويات",
                overview: "نظرة عامة",
                features: "الميزات الرئيسية",
                usage: "كيفية الاستخدام",
                formats: "الصيغ المدعومة",
                optimization: "نصائح التحسين",
                faq: "الأسئلة الشائعة"
            },
            sections: {
                overview: {
                    title: "نظرة عامة",
                    content: "في العصر الرقمي الحالي، أصبح الوصول إلى محتوى الوسائط دون اتصال بالإنترنت أمراً مهماً بشكل متزايد. سيساعدك هذا الدليل في فهم كيفية تنزيل وإدارة ملفات الوسائط الخاصة بك بشكل فعال."
                },
                features: {
                    title: "الميزات الرئيسية",
                    videoTitle: "تحميلات الفيديو",
                    videoFeatures: [
                        "تحميلات عالية الجودة تصل إلى دقة 4K",
                        "دعم صيغ متعددة (MP4, WebM, MKV)",
                        "اختيار مرن للجودة",
                        "سرعات تحميل عالية",
                        "دعم معاينة الصور المصغرة"
                    ],
                    audioTitle: "تحميلات الصوت",
                    audioFeatures: [
                        "تحويل MP3 عالي الجودة",
                        "خيارات معدل بت متعددة",
                        "تحسين تلقائي للصيغ",
                        "حفظ علامات ID3",
                        "دعم المعالجة المجمعة"
                    ]
                },
                usage: {
                    title: "كيفية الاستخدام",
                    steps: [
                        "انسخ والصق رابط الفيديو",
                        "اختر الجودة المفضلة لديك",
                        "انقر على التحميل وانتظر المعالجة",
                        "احفظ الملف على جهازك"
                    ],
                    tips: [
                        "تحقق دائماً من مساحة التخزين",
                        "استخدم اتصال إنترنت مستقر",
                        "اختر الجودة المناسبة لاحتياجاتك",
                        "حافظ على تنظيم التحميلات"
                    ]
                },
                formats: {
                    title: "الصيغ المدعومة",
                    video: {
                        title: "صيغ الفيديو",
                        content: "ندعم صيغ MP4 وWebM وMKV بدقة تتراوح من 360p إلى 4K. جميع الترميزات الشائعة مدعومة، بما في ذلك H.264 وVP9."
                    },
                    audio: {
                        title: "صيغ الصوت",
                        content: "تحويل MP3 عالي الجودة بمعدل بت يصل إلى 320kbps. كما ندعم صيغ M4A وWAV لأقصى قدر من التوافق."
                    }
                },
                optimization: {
                    title: "نصائح التحسين",
                    tips: [
                        "اختر الجودة المناسبة لجهازك",
                        "ضع في اعتبارك متطلبات مساحة التخزين",
                        "استخدم التحميل المجمع عندما يكون ذلك ممكناً",
                        "حافظ على تنظيم التحميلات",
                        "نظف الملفات المؤقتة بانتظام"
                    ]
                },
                faq: {
                    title: "الأسئلة الشائعة",
                    questions: [
                        {
                            q: "ما هي أقصى جودة متاحة؟",
                            a: "نحن ندعم دقة تصل إلى 4K للفيديوهات و320kbps للصوت."
                        },
                        {
                            q: "كم من الوقت تستغرق التحميلات؟",
                            a: "يعتمد وقت التحميل على حجم الملف وسرعة الإنترنت لديك."
                        },
                        {
                            q: "هل يتم حفظ التحميلات دون اتصال؟",
                            a: "نعم، يتم حفظ جميع التحميلات محلياً على جهازك."
                        }
                    ]
                }
            }
        },
        previousPage: 'السابق',
        nextPage: 'التالي',
        pageOf: 'صفحة {current} من {total}',
        selectAll: 'اختيار الكل',
        downloadSelected: 'تحميل المحدد ({count})',
        noVideosSelected: 'الرجاء تحديد مقاطع الفيديو للتحميل',
        processingPlaylist: 'معالجة قائمة التشغيل...',
        downloadingVideo: 'جاري تحميل الفيديو {current}/{total}',
        playlistDownloadComplete: 'اكتمل تحميل قائمة التشغيل',
        selectFormat: 'اختر الصيغة',
        downloadAnotherPlaylist: 'تحميل قائمة تشغيل أخرى',
        downloadAnotherAudio: 'تحميل صوت آخر',
        downloadAnotherVideo: 'تحميل فيديو آخر',
        pleaseSelectFormat: 'الرجاء اختيار الصيغة أولاً',
        selectFormatHelp: 'يرجى اختيار صيغة لكل فيديو تريد تحميله',
        downloadError: 'فشل بدء التحميل. يرجى المحاولة مرة أخرى.',
        networkError: 'خطأ في الشبكة أثناء بدء التحميل',
        formatRequired: 'يرجى اختيار الصيغة قبل تحديد مقاطع الفيديو',
        formatSelectLabel: 'اختر جودة الفيديو:',
        selectionError: 'يجب اختيار الصيغة قبل تحديد هذا الفيديو',
        enterUrl: 'الرجاء إدخال رابط',
        fetchError: 'فشل في جلب الصيغ. يرجى التحقق من الرابط والمحاولة مرة أخرى.',
        networkError: 'حدث خطأ في الشبكة. يرجى التحقق من اتصالك.',
        download: 'تحميل',
        fileSize: 'حجم الملف',
        channel: 'القناة',
        duration: 'المدة',
        downloadAudio: 'تحميل الصوت',
        loading: 'جاري التحميل...',
        processing: 'جاري المعالجة...',
        downloading: 'جاري التحميل...',
        converting: 'جاري التحويل...',
        completed: 'اكتمل التحميل',
        failed: 'فشل التحميل',
        retryDownload: 'إعادة المحاولة',
        invalidUrl: 'صيغة رابط غير صالحة',
        downloadProgress: 'تقدم التحميل: {progress}%',
        preparingDownload: 'جاري تحضير التحميل...',
        startingDownload: 'بدء التحميل...',
        processingPlaylist: 'معالجة قائمة التشغيل...',
        playlistProgress: 'جاري تحميل الفيديو {current} من {total}',
        formatRequired: 'الرجاء اختيار الصيغة قبل التحميل',
    },
    es: {
        downloadMedia: "Descargar Medios",
        downloadDesc: "Descarga tus videos favoritos, listas de reproducción o audio en alta calidad",
        video: "Video",
        audio: "Audio",
        fileSize: 'Tamaño del archivo',
        previousPage: 'Anterior',  
        nextPage: 'Siguiente',  
        pageOf: 'Página {current} de {total}',  
        selectAll: 'Seleccionar todo',  
        pleaseSelectFormat: 'Por favor, seleccione un formato primero',  
        selectFormatHelp: 'Seleccione un formato para cada video que desee descargar',  
        downloadError: 'Error al iniciar la descarga. Por favor, inténtelo de nuevo.',  
        networkError: 'Error de red al iniciar la descarga',  
        networkError: 'Ocurrió un error de red. Por favor, verifique su conexión.',  
        fetchError: 'Error al obtener los formatos. Por favor, verifique el enlace e inténtelo de nuevo.',  
        formatSelectLabel: 'Seleccione la calidad del video:',  
        selectionError: 'Debe seleccionar un formato antes de elegir este video',  
        enterUrl: 'Por favor, ingrese un enlace',
        downloadSelected: 'Descargar seleccionados ({count})',  
        noVideosSelected: 'Por favor, seleccione los videos para descargar',  
        processingPlaylist: 'Procesando lista de reproducción...',  
        downloadingVideo: 'Descargando video {current}/{total}',  
        playlistDownloadComplete: 'Descarga de la lista de reproducción completada',
        playlist: "Lista de reproducción",
        pasteUrl: "Pega la URL aquí",
        fetchFormats: "Descargar",
        selectFormat: "Seleccionar formato",
        downloadVideo: "Descargar Video",
        downloadAudio: "Descargar Audio",
        downloadAnother: "Descargar Otro",
        loading: 'Cargando...',
        processing: "Procesando...",
        downloading: "Descargando...",
        converting: "Convirtiendo...",
        completed: "Descarga completada",
        failed: 'Error en la descarga',
        retryDownload: "Reintentar",
        invalidUrl: "URL no válida",
        downloadProgress: "Progreso de la descarga: {progress}%",
        preparingDownload: "Preparando la descarga...",
        startingDownload: "Iniciando descarga...",
        processingPlaylist: "Procesando lista de reproducción...",
        playlistProgress: "Descargando video {current} de {total}",
        formatRequired: 'Por favor, seleccione un formato antes de descargar',
        downloadAnotherPlaylist: 'Descargar otra lista de reproducción',
        downloadAnotherAudio: 'Descargar otro audio',
        downloadAnotherVideo: 'Descargar otro video',
        processing: "Procesando...",
        channel: "Canal",
        download: "descargar",
        duration: "Duración",
        availableFormats: "Formatos Disponibles",
        completeGuide: "Guía Completa para Descargar Video y Audio",
        understanding: "Entendiendo las Descargas de Medios en Línea",
        understandingDesc: "En la era digital actual, la descarga de videos y audio de plataformas en línea se ha convertido en una necesidad esencial para muchos usuarios.",
        copyright: "Todos los derechos reservados",
        videoFeatures: "Características de Descarga de Video",
        videoFeaturesList: [
            "Descargas de video de alta calidad hasta 4K",
            "Múltiples opciones de formato para adaptarse a tu dispositivo",
            "Soporte para varias plataformas de video en línea",
            "Velocidades de descarga rápidas con rendimiento confiable",
            "Selección automática de calidad según tus preferencias"
        ],
        audioCapabilities: "Capacidades de Descarga de Audio",
        audioCapabilitiesList: [
            "Conversión de MP3 de alta calidad para una experiencia de audio óptima",
            "Preservación de la calidad de sonido cristalina",
            "Optimización eficiente del tamaño del archivo",
            "Múltiples opciones de bitrate para diferentes necesidades",
            "Perfecto para música, podcasts y contenido educativo"
        ],
        benefits: "Beneficios de Usar VideoGrab",
        personalUse: "Para Uso Personal",
        personalUseList: [
            "Acceso sin conexión a tu contenido favorito",
            "Ahorra espacio de almacenamiento con descargas optimizadas",
            "Compatible con todos los dispositivos",
            "No se requiere registro"
        ],
        professionalUse: "Para Uso Profesional",
        professionalUseList: [
            "Capacidades de descarga por lotes",
            "Preservación de alta calidad",
            "Velocidades de procesamiento rápidas",
            "Resultados confiables y consistentes"
        ],
        bestPractices: "Mejores Prácticas para Descargas de Medios",
        bestPracticesList: [
            "Asegúrate siempre de tener el derecho de descargar y usar el contenido",
            "Elige la calidad adecuada según tus necesidades y capacidades del dispositivo",
            "Considera el espacio de almacenamiento y el tamaño del archivo al seleccionar opciones de descarga",
            "Usa una conexión a internet confiable para mejores velocidades de descarga",
            "Limpia regularmente tus archivos descargados para gestionar el almacenamiento de manera efectiva"
        ],
        commonUseCases: "Casos de Uso Comunes",
        educational: "Educativo",
        educationalDesc: "Perfecto para profesores y estudiantes que necesitan descargar videos educativos, conferencias y tutoriales para el aprendizaje sin conexión. Asegura el acceso continuo a los materiales de aprendizaje independientemente de la conectividad a internet.",
        entertainment: "Entretenimiento",
        entertainmentDesc: "Descarga tus videos musicales, podcasts y contenido de entretenimiento favoritos para ver sin conexión durante viajes o en áreas con acceso limitado a internet.",
        technicalSpecs: "Especificaciones Técnicas",
        techSpecsList: {
            videoFormats: "Formatos de Video Soportados: MP4, WebM, MKV",
            audioFormats: "Formatos de Audio Soportados: MP3, M4A, WAV",
            maxQuality: "Calidad Máxima de Video: Hasta 4K (2160p)",
            audioQuality: "Calidad de Audio: Hasta 320 kbps",
            speed: "Velocidad de Procesamiento: Depende del tamaño del archivo y la conexión a internet"
        },
        tips: "Consejos para Resultados Óptimos",
        tipsList: [
            "Siempre verifica tu espacio de almacenamiento disponible antes de descargar",
            "Usa una conexión a internet estable para mejores velocidades de descarga",
            "Considera el uso previsto al seleccionar opciones de calidad",
            "Actualiza regularmente tu navegador para una compatibilidad óptima",
            "Mantén un seguimiento de tus archivos descargados para una mejor organización"
        ],
        article: {
            title: "Guía Completa para Descargar Video y Audio",
            toc: {
                title: "Tabla de Contenidos",
                overview: "Visión General",
                features: "Características Clave",
                usage: "Cómo Usar",
                formats: "Formatos Soportados",
                optimization: "Consejos de Optimización",
                faq: "Preguntas Frecuentes"
            },
            sections: {
                overview: {
                    title: "Visión General",
                    content: "En la era digital actual, tener acceso a contenido multimedia sin conexión se ha vuelto cada vez más importante. Esta guía te ayudará a entender cómo descargar y gestionar tus archivos multimedia de manera efectiva."
                },
                features: {
                    title: "Características Clave",
                    videoTitle: "Descargas de Video",
                    videoFeatures: [
                        "Descargas de alta calidad hasta resolución 4K",
                        "Soporte para múltiples formatos (MP4, WebM, MKV)",
                        "Selección de calidad flexible",
                        "Velocidades de descarga rápidas",
                        "Soporte para vista previa de miniaturas"
                    ],
                    audioTitle: "Descargas de Audio",
                    audioFeatures: [
                        "Conversión de MP3 de alta calidad",
                        "Múltiples opciones de bitrate",
                        "Optimización automática de formato",
                        "Preservación de etiquetas ID3",
                        "Soporte para procesamiento por lotes"
                    ]
                },
                usage: {
                    title: "Cómo Usar",
                    steps: [
                        "Copia y pega la URL del video",
                        "Selecciona tu calidad preferida",
                        "Haz clic en descargar y espera a que se procese",
                        "Guarda el archivo en tu dispositivo"
                    ],
                    tips: [
                        "Siempre verifica tu espacio de almacenamiento",
                        "Usa una conexión a internet estable",
                        "Elige la calidad adecuada para tus necesidades",
                        "Mantén tus descargas organizadas"
                    ]
                },
                formats: {
                    title: "Formatos Soportados",
                    video: {
                        title: "Formatos de Video",
                        content: "Soportamos formatos MP4, WebM y MKV con resoluciones que van desde 360p hasta 4K. Todos los códecs populares son soportados, incluyendo H.264 y VP9."
                    },
                    audio: {
                        title: "Formatos de Audio",
                        content: "Conversión de MP3 de alta calidad con bitrates de hasta 320kbps. También soportamos formatos M4A y WAV para máxima compatibilidad."
                    }
                },
                optimization: {
                    title: "Consejos de Optimización",
                    tips: [
                        "Elige la calidad adecuada para tu dispositivo",
                        "Considera los requisitos de espacio de almacenamiento",
                        "Usa descargas por lotes cuando sea posible",
                        "Mantén tus descargas organizadas",
                        "Limpia los archivos temporales regularmente"
                    ]
                },
                faq: {
                    title: "Preguntas Frecuentes",
                    questions: [
                        {
                            q: "¿Cuál es la calidad máxima disponible?",
                            a: "Soportamos hasta resolución 4K para videos y 320kbps para audio."
                        },
                        {
                            q: "¿Cuánto tiempo tardan las descargas?",
                            a: "El tiempo de descarga depende del tamaño del archivo y la velocidad de tu internet."
                        },
                        {
                            q: "¿Las descargas se guardan sin conexión?",
                            a: "Sí, todas las descargas se guardan localmente en tu dispositivo."
                        }
                    ]
                }
            }
        },
        howToDownloadTitle: "Cómo Descargar",
        howToDownloadStep1: "Copia la URL del video desde la barra de direcciones de tu navegador",
        howToDownloadStep2: "Pega la URL en el cuadro de entrada de arriba",
        howToDownloadStep3: 'Haz clic en "Obtener Formatos" y selecciona tu calidad preferida',
        howToDownloadStep4: 'Haz clic en "Descargar" y espera tu video',
    },
    de: {
        downloadMedia: "Medien Herunterladen",
        downloadDesc: "Laden Sie Ihre Lieblingsvideos oder -audios in hoher Qualität herunter",
        video: "Video",
        playlist: 'Wiedergabeliste',
        audio: "Audio",
        pasteUrl: "URL hier einfügen",
        pleaseSelectFormat: 'Bitte wählen Sie zuerst ein Format aus',  
        selectFormatHelp: 'Bitte wählen Sie ein Format für jedes Video, das Sie herunterladen möchten',  
        downloadError: 'Starten des Downloads fehlgeschlagen. Bitte versuchen Sie es erneut.',  
        networkError: 'Netzwerkfehler beim Starten des Downloads',  
        networkError: 'Ein Netzwerkfehler ist aufgetreten. Bitte überprüfen Sie Ihre Verbindung.',  
        fetchError: 'Abrufen der Formate fehlgeschlagen. Bitte überprüfen Sie den Link und versuchen Sie es erneut.',  
        formatSelectLabel: 'Wählen Sie die Videoqualität:',  
        selectionError: 'Sie müssen ein Format auswählen, bevor Sie dieses Video auswählen',  
        enterUrl: 'Bitte geben Sie einen Link ein',
        fileSize: 'Dateigröße',
        fetchFormats: "herunterladen",
        downloadAnotherPlaylist: 'Eine weitere Playlist herunterladen',
        loading: 'Ladevorgang läuft...',  
        processing: 'Wird verarbeitet...',  
        downloading: 'Wird heruntergeladen...',  
        converting: 'Wird konvertiert...',  
        completed: 'Download abgeschlossen',  
        failed: 'Download fehlgeschlagen',  
        retryDownload: 'Erneut versuchen',  
        invalidUrl: 'Ungültiges Linkformat',  
        downloadProgress: 'Download-Fortschritt: {progress}%',  
        preparingDownload: 'Download wird vorbereitet...',  
        startingDownload: 'Download wird gestartet...',  
        processingPlaylist: 'Wiedergabeliste wird verarbeitet...',  
        playlistProgress: 'Video {current} von {total} wird heruntergeladen',  
        formatRequired: 'Bitte wählen Sie ein Format vor dem Download aus',
        downloadAnotherAudio: 'Weiteres Audio herunterladen',
        downloadAnotherVideo: 'Ein weiteres Video herunterladen',
        selectFormat: "Format auswählen",
        downloadVideo: "Video Herunterladen",
        downloadAudio: "Audio Herunterladen",
        previousPage: 'Zurück',  
        nextPage: 'Weiter',  
        pageOf: 'Seite {current} von {total}',  
        selectAll: 'Alle auswählen',  
        downloadSelected: 'Ausgewählte herunterladen ({count})',  
        noVideosSelected: 'Bitte wählen Sie Videos zum Herunterladen aus',  
        processingPlaylist: 'Wiedergabeliste wird verarbeitet...',  
        downloadingVideo: 'Video {current}/{total} wird heruntergeladen',  
        playlistDownloadComplete: 'Wiedergabeliste heruntergeladen',
        downloadAnother: "Weitere Herunterladen",
        processing: "Verarbeitung...",
        channel: "Kanal",
        download: "herunterladen",
        duration: "Dauer",
        availableFormats: "Verfügbare Formate",
        completeGuide: "Vollständiger Leitfaden zum Herunterladen von Video und Audio",
        understanding: "Verständnis von Online-Mediendownloads",
        understandingDesc: "Im heutigen digitalen Zeitalter ist das Herunterladen von Videos und Audio von Online-Plattformen für viele Benutzer zu einer wesentlichen Notwendigkeit geworden.",
        copyright: "Alle Rechte vorbehalten",
        videoFeatures: "Video-Download-Funktionen",
        videoFeaturesList: [
            "Hochqualitative Videodownloads bis zu 4K Auflösung",
            "Mehrere Formatoptionen für Ihre Gerätekompatibilität",
            "Unterstützung für verschiedene Online-Videoplattformen",
            "Schnelle Download-Geschwindigkeiten mit zuverlässiger Leistung",
            "Automatische Qualitätsauswahl basierend auf Ihren Präferenzen"
        ],
        audioCapabilities: "Audio-Download-Funktionen",
        audioCapabilitiesList: [
            "Hochwertige MP3-Konvertierung für ein optimales Audioerlebnis",
            "Kristallklare Klangqualität",
            "Effiziente Dateigrößenoptimierung",
            "Mehrere Bitratenoptionen für unterschiedliche Bedürfnisse",
            "Perfekt für Musik, Podcasts und Bildungsinhalte"
        ],
        benefits: "Vorteile der Nutzung von VideoGrab",
        personalUse: "Für den persönlichen Gebrauch",
        personalUseList: [
            "Offline-Zugriff auf Ihre Lieblingsinhalte",
            "Speicherplatz sparen mit optimierten Downloads",
            "Kompatibel mit allen Geräten",
            "Keine Registrierung erforderlich"
        ],
        professionalUse: "Für den professionellen Gebrauch",
        professionalUseList: [
            "Batch-Download-Funktionen",
            "Hochwertige Erhaltung",
            "Schnelle Verarbeitungsgeschwindigkeiten",
            "Zuverlässige und konsistente Ergebnisse"
        ],
        bestPractices: "Best Practices für Mediendownloads",
        bestPracticesList: [
            "Stellen Sie immer sicher, dass Sie das Recht haben, den Inhalt herunterzuladen und zu verwenden",
            "Wählen Sie die geeignete Qualität basierend auf Ihren Bedürfnissen und Gerätefähigkeiten",
            "Berücksichtigen Sie den Speicherplatz und die Dateigröße bei der Auswahl der Download-Optionen",
            "Verwenden Sie eine zuverlässige Internetverbindung für bessere Download-Geschwindigkeiten",
            "Bereinigen Sie regelmäßig Ihre heruntergeladenen Dateien, um den Speicher effektiv zu verwalten"
        ],
        commonUseCases: "Häufige Anwendungsfälle",
        educational: "Bildung",
        educationalDesc: "Perfekt für Lehrer und Schüler, die Bildungsvideos, Vorlesungen und Tutorials für das Offline-Lernen herunterladen müssen. Stellt sicher, dass Lernmaterialien unabhängig von der Internetverbindung kontinuierlich zugänglich sind.",
        entertainment: "Unterhaltung",
        entertainmentDesc: "Laden Sie Ihre Lieblingsmusikvideos, Podcasts und Unterhaltungsinhalte für die Offline-Anzeige während Reisen oder in Gebieten mit begrenztem Internetzugang herunter.",
        technicalSpecs: "Technische Spezifikationen",
        techSpecsList: {
            videoFormats: "Unterstützte Videoformate: MP4, WebM, MKV",
            audioFormats: "Unterstützte Audioformate: MP3, M4A, WAV",
            maxQuality: "Maximale Videoqualität: Bis zu 4K (2160p)",
            audioQuality: "Audioqualität: Bis zu 320 kbps",
            speed: "Verarbeitungsgeschwindigkeit: Abhängig von Dateigröße und Internetverbindung"
        },
        tips: "Tipps für optimale Ergebnisse",
        tipsList: [
            "Überprüfen Sie immer Ihren verfügbaren Speicherplatz, bevor Sie herunterladen",
            "Verwenden Sie eine stabile Internetverbindung für bessere Download-Geschwindigkeiten",
            "Berücksichtigen Sie den beabsichtigten Verwendungszweck bei der Auswahl der Qualitätsoptionen",
            "Aktualisieren Sie regelmäßig Ihren Browser für optimale Kompatibilität",
            "Behalten Sie den Überblick über Ihre heruntergeladenen Dateien für eine bessere Organisation"
        ],
        article: {
            title: "Vollständiger Leitfaden zum Video- und Audio-Download",
            toc: {
                title: "Inhaltsverzeichnis",
                overview: "Überblick",
                features: "Hauptmerkmale",
                usage: "Anleitung",
                formats: "Unterstützte Formate",
                optimization: "Optimierungstipps",
                faq: "FAQ"
            },
            sections: {
                overview: {
                    title: "Überblick",
                    content: "Im heutigen digitalen Zeitalter ist der Zugang zu Offline-Medieninhalten immer wichtiger geworden. Dieser Leitfaden hilft Ihnen zu verstehen, wie Sie Ihre Mediendateien effektiv herunterladen und verwalten können."
                },
                features: {
                    title: "Hauptmerkmale",
                    videoTitle: "Video-Downloads",
                    videoFeatures: [
                        "Hochwertige Downloads bis zu 4K Auflösung",
                        "Unterstützung für mehrere Formate (MP4, WebM, MKV)",
                        "Flexible Qualitätsauswahl",
                        "Schnelle Download-Geschwindigkeiten",
                        "Unterstützung für Miniaturansicht"
                    ],
                    audioTitle: "Audio-Downloads",
                    audioFeatures: [
                        "Hochwertige MP3-Konvertierung",
                        "Mehrere Bitratenoptionen",
                        "Automatische Formatoptimierung",
                        "ID3-Tag-Erhaltung",
                        "Unterstützung für Batch-Verarbeitung"
                    ]
                },
                usage: {
                    title: "Anleitung",
                    steps: [
                        "Kopieren und Einfügen der Video-URL",
                        "Wählen Sie Ihre bevorzugte Qualität",
                        "Klicken Sie auf Download und warten Sie auf die Verarbeitung",
                        "Speichern Sie die Datei auf Ihrem Gerät"
                    ],
                    tips: [
                        "Überprüfen Sie immer Ihren Speicherplatz",
                        "Verwenden Sie eine stabile Internetverbindung",
                        "Wählen Sie die geeignete Qualität für Ihre Bedürfnisse",
                        "Halten Sie Ihre Downloads organisiert"
                    ]
                },
                formats: {
                    title: "Unterstützte Formate",
                    video: {
                        title: "Videoformate",
                        content: "Wir unterstützen die Formate MP4, WebM und MKV mit Auflösungen von 360p bis 4K. Alle gängigen Codecs werden unterstützt, einschließlich H.264 und VP9."
                    },
                    audio: {
                        title: "Audioformate",
                        content: "Hochwertige MP3-Konvertierung mit Bitraten bis zu 320kbps. Wir unterstützen auch die Formate M4A und WAV für maximale Kompatibilität."
                    }
                },
                optimization: {
                    title: "Optimierungstipps",
                    tips: [
                        "Wählen Sie die geeignete Qualität für Ihr Gerät",
                        "Berücksichtigen Sie die Speicheranforderungen",
                        "Verwenden Sie Batch-Downloads, wenn möglich",
                        "Halten Sie Ihre Downloads organisiert",
                        "Bereinigen Sie regelmäßig temporäre Dateien"
                    ]
                },
                faq: {
                    title: "FAQ",
                    questions: [
                        {
                            q: "Was ist die maximale verfügbare Qualität?",
                            a: "Wir unterstützen bis zu 4K Auflösung für Videos und 320kbps für Audio."
                        },
                        {
                            q: "Wie lange dauern die Downloads?",
                            a: "Die Downloadzeit hängt von der Dateigröße und Ihrer Internetgeschwindigkeit ab."
                        },
                        {
                            q: "Werden die Downloads offline gespeichert?",
                            a: "Ja, alle Downloads werden lokal auf Ihrem Gerät gespeichert."
                        }
                    ]
                }
            }
        },
        howToDownloadTitle: 'Anleitung zum Herunterladen',
        howToDownloadStep1: 'Kopiere die Video-URL aus der Adressleiste deines Browsers',
        howToDownloadStep2: 'Füge die URL in das obige Eingabefeld ein',
        howToDownloadStep3: 'Klicke auf "Formate Abrufen" und wähle deine bevorzugte Qualität',
        howToDownloadStep4: 'Klicke auf "Herunterladen" und warte auf dein Video',
    },
    hi: {
        downloadMedia: "मीडिया डाउनलोड करें",
        downloadDesc: "अपने पसंदीदा वीडियो या ऑडियो को उच्च गुणवत्ता में डाउनलोड करें",
        video: "वीडियो",
        audio: "ऑडियो",
        playlist: 'प्लेलिस्ट',
        pasteUrl: "यहाँ URL पेस्ट करें",
        fetchFormats: "डाउनलोड करना",
        selectFormat: "फॉर्मेट चुनें",
        previousPage: 'पिछला',  
        nextPage: 'अगला',  
        pageOf: 'पृष्ठ {current} में से {total}',  
        pleaseSelectFormat: 'कृपया पहले एक प्रारूप चुनें',  
        selectFormatHelp: 'कृपया डाउनलोड करने के लिए प्रत्येक वीडियो के लिए एक प्रारूप चुनें',  
        downloadError: 'डाउनलोड शुरू करने में विफल। कृपया पुनः प्रयास करें।',  
        networkError: 'डाउनलोड शुरू करते समय नेटवर्क त्रुटि',  
        networkError: 'नेटवर्क त्रुटि हुई। कृपया अपना कनेक्शन जांचें।',  
        fetchError: 'प्रारूप प्राप्त करने में विफल। कृपया लिंक जांचें और पुनः प्रयास करें।',  
        formatSelectLabel: 'वीडियो गुणवत्ता चुनें:',  
        selectionError: 'इस वीडियो को चुनने से पहले आपको एक प्रारूप चुनना होगा',  
        enterUrl: 'कृपया एक लिंक दर्ज करें',
        fileSize: 'फ़ाइल का आकार',
        selectAll: 'सभी चुनें',  
        downloadSelected: 'चयनित डाउनलोड करें ({count})',  
        noVideosSelected: 'कृपया डाउनलोड करने के लिए वीडियो चुनें',  
        processingPlaylist: 'प्लेलिस्ट प्रोसेसिंग हो रही है...',  
        downloadingVideo: 'वीडियो {current}/{total} डाउनलोड हो रहा है',  
        playlistDownloadComplete: 'प्लेलिस्ट डाउनलोड पूरा हो गया',
        downloadVideo: "वीडियो डाउनलोड करें",
        downloadAudio: "ऑडियो डाउनलोड करें",
        downloadAnother: "दूसरा डाउनलोड करें",
        loading: 'लोड हो रहा है...',  
        processing: 'प्रोसेसिंग हो रही है...',  
        downloading: 'डाउनलोड हो रहा है...',  
        converting: 'कन्वर्ट हो रहा है...',  
        completed: 'डाउनलोड पूरा हो गया',  
        failed: 'डाउनलोड विफल',  
        retryDownload: 'पुनः प्रयास करें',  
        invalidUrl: 'अमान्य लिंक प्रारूप',  
        downloadProgress: 'डाउनलोड प्रगति: {progress}%',  
        preparingDownload: 'डाउनलोड तैयार किया जा रहा है...',  
        startingDownload: 'डाउनलोड शुरू हो रहा है...',  
        processingPlaylist: 'प्लेलिस्ट प्रोसेसिंग हो रही है...',  
        playlistProgress: 'वीडियो {current} में से {total} डाउनलोड हो रहा है',  
        formatRequired: 'डाउनलोड करने से पहले कृपया एक प्रारूप चुनें',
        downloadAnotherPlaylist: 'एक और प्लेलिस्ट डाउनलोड करें',
        downloadAnotherAudio: 'एक और ऑडियो डाउनलोड करें',
        downloadAnotherVideo: 'एक और वीडियो डाउनलोड करें',
        download: 'डाउनलोड करना',
        processing: "प्रोसेसिंग...",
        channel: "चैनल",
        duration: "अवधि",
        availableFormats: "उपलब्ध फॉर्मेट",
        completeGuide: "वीडियो और ऑडियो डाउनलोड करने का पूर्ण मार्गदर्शक",
        understanding: "ऑनलाइन मीडिया डाउनलोड को समझना",
        understandingDesc: "आज के डिजिटल युग में, ऑनलाइन प्लेटफॉर्म से वीडियो और ऑडियो डाउनलोड करना कई उपयोगकर्ताओं के लिए एक आवश्यक आवश्यकता बन गया है।",
        copyright: "सर्वाधिकार सुरक्षित",
        videoFeatures: "वीडियो डाउनलोड सुविधाएं",
        videoFeaturesList: [
            "4K रिज़ॉल्यूशन तक उच्च गुणवत्ता वाले वीडियो डाउनलोड",
            "आपके डिवाइस की संगतता के अनुरूप कई फॉर्मेट विकल्प",
            "विभिन्न ऑनलाइन वीडियो प्लेटफ़ॉर्म के लिए समर्थन",
            "विश्वसनीय प्रदर्शन के साथ तेज डाउनलोड स्पीड",
            "आपकी पसंद के आधार पर स्वचालित गुणवत्ता चयन"
        ],
        audioCapabilities: "ऑडियो डाउनलोड क्षमताएं",
        audioCapabilitiesList: [
            "उत्तम ऑडियो अनुभव के लिए उच्च गुणवत्ता वाली MP3 कन्वर्ज़न",
            "क्रिस्टल-क्लियर साउंड क्वालिटी प्रिज़र्वेशन",
            "प्रभावी फ़ाइल आकार अनुकूलन",
            "विभिन्न आवश्यकताओं के लिए कई बिटरेट विकल्प",
            "संगीत, पॉडकास्ट और शैक्षिक सामग्री के लिए उत्तम"
        ],
        benefits: "VideoGrab का उपयोग करने के लाभ",
        personalUse: "व्यक्तिगत उपयोग के लिए",
        personalUseList: [
            "अपने पसंदीदा सामग्री का ऑफ़लाइन एक्सेस",
            "अनुकूलित डाउनलोड के साथ स्टोरेज स्पेस बचाएं",
            "सभी डिवाइस के साथ संगत",
            "कोई पंजीकरण आवश्यक नहीं"
        ],
        professionalUse: "पेशेवर उपयोग के लिए",
        professionalUseList: [
            "बैच डाउनलोड क्षमताएं",
            "उच्च गुणवत्ता संरक्षण",
            "तेज़ प्रोसेसिंग स्पीड",
            "विश्वसनीय और सुसंगत परिणाम"
        ],
        bestPractices: "मीडिया डाउनलोड के लिए सर्वोत्तम प्रथाएं",
        bestPracticesList: [
            "हमेशा सुनिश्चित करें कि आपके पास सामग्री डाउनलोड और उपयोग करने का अधिकार है",
            "अपनी आवश्यकताओं और डिवाइस क्षमताओं के आधार पर उपयुक्त गुणवत्ता चुनें",
            "डाउनलोड विकल्प चुनते समय स्टोरेज स्पेस और फ़ाइल आकार पर विचार करें",
            "बेहतर डाउनलोड स्पीड के लिए एक विश्वसनीय इंटरनेट कनेक्शन का उपयोग करें",
            "स्टोरेज को प्रभावी ढंग से प्रबंधित करने के लिए नियमित रूप से अपने डाउनलोड की गई फ़ाइलों को साफ़ करें"
        ],
        commonUseCases: "सामान्य उपयोग के मामले",
        educational: "शैक्षिक",
        educationalDesc: "शिक्षकों और छात्रों के लिए उत्तम जो ऑफ़लाइन सीखने के लिए शैक्षिक वीडियो, व्याख्यान और ट्यूटोरियल डाउनलोड करने की आवश्यकता है। इंटरनेट कनेक्टिविटी की परवाह किए बिना सीखने की सामग्री तक निरंतर पहुंच सुनिश्चित करता है।",
        entertainment: "मनोरंजन",
        entertainmentDesc: "यात्रा के दौरान या सीमित इंटरनेट एक्सेस वाले क्षेत्रों में ऑफ़लाइन देखने के लिए अपने पसंदीदा संगीत वीडियो, पॉडकास्ट और मनोरंजन सामग्री डाउनलोड करें।",
        technicalSpecs: "तकनीकी विनिर्देश",
        techSpecsList: {
            videoFormats: "समर्थित वीडियो फॉर्मेट: MP4, WebM, MKV",
            audioFormats: "समर्थित ऑडियो फॉर्मेट: MP3, M4A, WAV",
            maxQuality: "अधिकतम वीडियो गुणवत्ता: 4K (2160p) तक",
            audioQuality: "ऑडियो गुणवत्ता: 320 kbps तक",
            speed: "प्रोसेसिंग स्पीड: फ़ाइल आकार और इंटरनेट कनेक्शन पर निर्भर"
        },
        tips: "उत्तम परिणामों के लिए सुझाव",
        tipsList: [
            "डाउनलोड करने से पहले हमेशा अपनी उपलब्ध स्टोरेज स्पेस की जांच करें",
            "बेहतर डाउनलोड स्पीड के लिए एक स्थिर इंटरनेट कनेक्शन का उपयोग करें",
            "गुणवत्ता विकल्प चुनते समय इच्छित उपयोग पर विचार करें",
            "उत्तम संगतता के लिए नियमित रूप से अपने ब्राउज़र को अपडेट करें",
            "बेहतर संगठन के लिए अपने डाउनलोड की गई फ़ाइलों का ट्रैक रखें"
        ],
        article: {
            title: "वीडियो और ऑडियो डाउनलोड के लिए पूर्ण गाइड",
            toc: {
                title: "सामग्री की तालिका",
                overview: "अवलोकन",
                features: "मुख्य विशेषताएं",
                usage: "कैसे उपयोग करें",
                formats: "समर्थित फॉर्मेट",
                optimization: "अनुकूलन सुझाव",
                faq: "सामान्य प्रश्न"
            },
            sections: {
                overview: {
                    title: "अवलोकन",
                    content: "आज के डिजिटल युग में, ऑफ़लाइन मीडिया सामग्री तक पहुंच होना अत्यधिक महत्वपूर्ण हो गया है। यह गाइड आपको यह समझने में मदद करेगा कि कैसे प्रभावी ढंग से अपने मीडिया फ़ाइलों को डाउनलोड और प्रबंधित करें।"
                },
                features: {
                    title: "मुख्य विशेषताएं",
                    videoTitle: "वीडियो डाउनलोड",
                    videoFeatures: [
                        "4K रिज़ॉल्यूशन तक उच्च गुणवत्ता वाले डाउनलोड",
                        "कई फॉर्मेट समर्थन (MP4, WebM, MKV)",
                        "लचीला गुणवत्ता चयन",
                        "तेज़ डाउनलोड स्पीड",
                        "थंबनेल पूर्वावलोकन समर्थन"
                    ],
                    audioTitle: "ऑडियो डाउनलोड",
                    audioFeatures: [
                        "उच्च गुणवत्ता वाली MP3 कन्वर्ज़न",
                        "कई बिटरेट विकल्प",
                        "स्वचालित फॉर्मेट अनुकूलन",
                        "ID3 टैग संरक्षण",
                        "बैच प्रोसेसिंग समर्थन"
                    ]
                },
                usage: {
                    title: "कैसे उपयोग करें",
                    steps: [
                        "वीडियो URL कॉपी और पेस्ट करें",
                        "अपनी पसंदीदा गुणवत्ता चुनें",
                        "डाउनलोड पर क्लिक करें और प्रोसेसिंग की प्रतीक्षा करें",
                        "फ़ाइल को अपने डिवाइस में सहेजें"
                    ],
                    tips: [
                        "हमेशा अपनी स्टोरेज स्पेस की जांच करें",
                        "स्थिर इंटरनेट कनेक्शन का उपयोग करें",
                        "अपनी आवश्यकताओं के अनुसार उपयुक्त गुणवत्ता चुनें",
                        "अपने डाउनलोड को संगठित रखें"
                    ]
                },
                formats: {
                    title: "समर्थित फॉर्मेट",
                    video: {
                        title: "वीडियो फॉर्मेट",
                        content: "हम MP4, WebM और MKV फॉर्मेट का समर्थन करते हैं जिनकी रिज़ॉल्यूशन 360p से 4K तक होती है। सभी लोकप्रिय कोडेक्स का समर्थन किया जाता है, जिसमें H.264 और VP9 शामिल हैं।"
                    },
                    audio: {
                        title: "ऑडियो फॉर्मेट",
                        content: "320kbps तक की बिटरेट के साथ उच्च गुणवत्ता वाली MP3 कन्वर्ज़न। हम अधिकतम संगतता के लिए M4A और WAV फॉर्मेट का भी समर्थन करते हैं।"
                    }
                },
                optimization: {
                    title: "अनुकूलन सुझाव",
                    tips: [
                        "अपने डिवाइस के लिए उपयुक्त गुणवत्ता चुनें",
                        "स्टोरेज स्पेस आवश्यकताओं पर विचार करें",
                        "संभव हो तो बैच डाउनलोड का उपयोग करें",
                        "अपने डाउनलोड को संगठित रखें",
                        "अस्थायी फ़ाइलों को नियमित रूप से साफ़ करें"
                    ]
                },
                faq: {
                    title: "सामान्य प्रश्न",
                    questions: [
                        {
                            q: "अधिकतम उपलब्ध गुणवत्ता क्या है?",
                            a: "हम वीडियो के लिए 4K रिज़ॉल्यूशन और ऑडियो के लिए 320kbps तक का समर्थन करते हैं।"
                        },
                        {
                            q: "डाउनलोड में कितना समय लगता है?",
                            a: "डाउनलोड का समय फ़ाइल के आकार और आपके इंटरनेट की गति पर निर्भर करता है।"
                        },
                        {
                            q: "क्या डाउनलोड ऑफ़लाइन सहेजे जाते हैं?",
                            a: "हाँ, सभी डाउनलोड आपके डिवाइस पर स्थानीय रूप से सहेजे जाते हैं।"
                        }
                    ]
                }
            }
        },
        howToDownloadTitle: 'कैसे डाउनलोड करें',
        howToDownloadStep1: 'अपने ब्राउज़र के एड्रेस बार से वीडियो URL कॉपी करें',
        howToDownloadStep2: 'URL को ऊपर दिए गए इनपुट बॉक्स में पेस्ट करें',
        howToDownloadStep3: '"फॉर्मेट प्राप्त करें" पर क्लिक करें और अपनी पसंदीदा गुणवत्ता चुनें',
        howToDownloadStep4: '"डाउनलोड" पर क्लिक करें और अपने वीडियो की प्रतीक्षा करें',
    },
    ko: {
        downloadMedia: "미디어 다운로드",
        downloadDesc: "좋아하는 동영상이나 오디오를 고품질로 다운로드하세요",
        video: "동영상",
        playlist: "플레이리스트",
        audio: "오디오",
        pasteUrl: "여기에 URL 붙여넣기",
        previousPage: '이전',  
        nextPage: '다음',  
        fileSize: '파일 크기',
        pageOf: '페이지 {current} / {total}',  
        pleaseSelectFormat: '먼저 형식을 선택하세요',  
        selectFormatHelp: '다운로드하려는 각 동영상에 대한 형식을 선택하세요',  
        downloadError: '다운로드를 시작하지 못했습니다. 다시 시도하세요.',  
        networkError: '다운로드를 시작하는 중 네트워크 오류 발생',  
        networkError: '네트워크 오류가 발생했습니다. 연결을 확인하세요.',  
        fetchError: '형식을 가져오지 못했습니다. 링크를 확인하고 다시 시도하세요.',  
        formatSelectLabel: '동영상 품질 선택:',  
        selectionError: '이 동영상을 선택하기 전에 형식을 선택해야 합니다',  
        enterUrl: '링크를 입력하세요',
        selectAll: '전체 선택',  
        downloadSelected: '선택한 항목 다운로드 ({count})',  
        noVideosSelected: '다운로드할 동영상을 선택하세요',  
        processingPlaylist: '재생 목록 처리 중...',  
        downloadingVideo: '비디오 {current}/{total} 다운로드 중',  
        playlistDownloadComplete: '재생 목록 다운로드 완료',
        fetchFormats: "다운로드",
        selectFormat: "형식 선택",
        downloadAnotherPlaylist: '다운로드 다른 플레이리스트',
        downloadAnotherAudio: '다른 오디오를 다운로드',
        downloadAnotherVideo: '다른 비디오를 다운로드',
        download: '다운로드',
        downloadVideo: "동영상 다운로드",
        loading: '로드 중...',  
        processing: '처리 중...',  
        downloading: '다운로드 중...',  
        converting: '변환 중...',  
        completed: '다운로드 완료',  
        failed: '다운로드 실패',  
        retryDownload: '다시 시도',  
        invalidUrl: '잘못된 링크 형식',  
        downloadProgress: '다운로드 진행률: {progress}%',  
        preparingDownload: '다운로드 준비 중...',  
        startingDownload: '다운로드 시작 중...',  
        processingPlaylist: '재생 목록 처리 중...',  
        playlistProgress: '비디오 {current} / {total} 다운로드 중',  
        formatRequired: '다운로드 전에 형식을 선택하세요',
        downloadAudio: "오디오 다운로드",
        downloadAnother: "다른 파일 다운로드",
        processing: "처리 중...",
        channel: "채널",
        duration: "재생 시간",
        availableFormats: "사용 가능한 형식",
        completeGuide: "동영상 및 오디오 다운로드 완벽 가이드",
        understanding: "온라인 미디어 다운로드 이해하기",
        understandingDesc: "오늘날의 디지털 시대에서 온라인 플랫폼에서 동영상과 오디오를 다운로드하는 것은 많은 사용자에게 필수적인 요구사항이 되었습니다.",
        copyright: "모든 권리 보유",
        videoFeatures: "비디오 다운로드 기능",
        videoFeaturesList: [
            "4K 해상도까지 고품질 비디오 다운로드",
            "기기 호환성에 맞는 다양한 형식 옵션",
            "다양한 온라인 비디오 플랫폼 지원",
            "안정적인 성능의 빠른 다운로드 속도",
            "사용자 선호도에 따른 자동 품질 선택"
        ],
        audioCapabilities: "오디오 다운로드 기능",
        audioCapabilitiesList: [
            "최적의 오디오 경험을 위한 고품질 MP3 변환",
            "크리스탈 클리어 사운드 품질 유지",
            "효율적인 파일 크기 최적화",
            "다양한 요구에 맞는 여러 비트레이트 옵션",
            "음악, 팟캐스트 및 교육 콘텐츠에 적합"
        ],
        benefits: "VideoGrab 사용의 이점",
        personalUse: "개인용",
        personalUseList: [
            "좋아하는 콘텐츠에 오프라인으로 액세스",
            "최적화된 다운로드로 저장 공간 절약",
            "모든 장치와 호환",
            "등록 필요 없음"
        ],
        professionalUse: "전문가용",
        professionalUseList: [
            "배치 다운로드 기능",
            "고품질 유지",
            "빠른 처리 속도",
            "신뢰할 수 있고 일관된 결과"
        ],
        bestPractices: "미디어 다운로드를 위한 모범 사례",
        bestPracticesList: [
            "항상 콘텐츠를 다운로드하고 사용할 권리가 있는지 확인하세요",
            "필요와 장치 기능에 따라 적절한 품질을 선택하세요",
            "다운로드 옵션을 선택할 때 저장 공간과 파일 크기를 고려하세요",
            "더 나은 다운로드 속도를 위해 신뢰할 수 있는 인터넷 연결을 사용하세요",
            "저장 공간을 효과적으로 관리하기 위해 정기적으로 다운로드한 파일을 정리하세요"
        ],
        commonUseCases: "일반적인 사용 사례",
        educational: "교육용",
        educationalDesc: "오프라인 학습을 위해 교육 비디오, 강의 및 튜토리얼을 다운로드해야 하는 교사와 학생에게 적합합니다. 인터넷 연결에 관계없이 학습 자료에 지속적으로 액세스할 수 있습니다.",
        entertainment: "엔터테인먼트",
        entertainmentDesc: "여행 중이거나 인터넷 접속이 제한된 지역에서 오프라인으로 시청할 수 있도록 좋아하는 음악 비디오, 팟캐스트 및 엔터테인먼트 콘텐츠를 다운로드하세요.",
        technicalSpecs: "기술 사양",
        techSpecsList: {
            videoFormats: "지원되는 비디오 형식: MP4, WebM, MKV",
            audioFormats: "지원되는 오디오 형식: MP3, M4A, WAV",
            maxQuality: "최대 비디오 품질: 최대 4K (2160p)",
            audioQuality: "오디오 품질: 최대 320 kbps",
            speed: "처리 속도: 파일 크기 및 인터넷 연결에 따라 다름"
        },
        tips: "최적의 결과를 위한 팁",
        tipsList: [
            "다운로드하기 전에 항상 사용 가능한 저장 공간을 확인하세요",
            "더 나은 다운로드 속도를 위해 안정적인 인터넷 연결을 사용하세요",
            "품질 옵션을 선택할 때 의도된 사용을 고려하세요",
            "최적의 호환성을 위해 정기적으로 브라우저를 업데이트하세요",
            "더 나은 조직을 위해 다운로드한 파일을 추적하세요"
        ],
        article: {
            title: "비디오 및 오디오 다운로드 완벽 가이드",
            toc: {
                title: "목차",
                overview: "개요",
                features: "주요 기능",
                usage: "사용 방법",
                formats: "지원 형식",
                optimization: "최적화 팁",
                faq: "자주 묻는 질문"
            },
            sections: {
                overview: {
                    title: "개요",
                    content: "오늘날의 디지털 시대에서 오프라인 미디어 콘텐츠에 액세스하는 것이 점점 더 중요해지고 있습니다. 이 가이드는 미디어 파일을 효과적으로 다운로드하고 관리하는 방법을 이해하는 데 도움이 될 것입니다."
                },
                features: {
                    title: "주요 기능",
                    videoTitle: "비디오 다운로드",
                    videoFeatures: [
                        "4K 해상도까지 고품질 다운로드",
                        "다중 형식 지원 (MP4, WebM, MKV)",
                        "유연한 품질 선택",
                        "빠른 다운로드 속도",
                        "썸네일 미리보기 지원"
                    ],
                    audioTitle: "오디오 다운로드",
                    audioFeatures: [
                        "고품질 MP3 변환",
                        "다양한 비트레이트 옵션",
                        "자동 형식 최적화",
                        "ID3 태그 보존",
                        "배치 처리 지원"
                    ]
                },
                usage: {
                    title: "사용 방법",
                    steps: [
                        "동영상 URL 복사 및 붙여넣기",
                        "선호하는 품질 선택",
                        "다운로드 클릭 후 처리 대기",
                        "파일을 장치에 저장"
                    ],
                    tips: [
                        "항상 저장 공간을 확인하세요",
                        "안정적인 인터넷 연결을 사용하세요",
                        "필요에 맞는 적절한 품질을 선택하세요",
                        "다운로드를 정리하세요"
                    ]
                },
                formats: {
                    title: "지원 형식",
                    video: {
                        title: "비디오 형식",
                        content: "MP4, WebM 및 MKV 형식을 지원하며 해상도는 360p에서 4K까지 다양합니다. H.264 및 VP9을 포함한 모든 인기 코덱을 지원합니다."
                    },
                    audio: {
                        title: "오디오 형식",
                        content: "최대 320kbps의 비트레이트로 고품질 MP3 변환. 최대 호환성을 위해 M4A 및 WAV 형식도 지원합니다."
                    }
                },
                optimization: {
                    title: "최적화 팁",
                    tips: [
                        "장치에 적합한 품질을 선택하세요",
                        "저장 공간 요구 사항을 고려하세요",
                        "가능하면 배치 다운로드를 사용하세요",
                        "다운로드를 정리하세요",
                        "임시 파일을 정기적으로 정리하세요"
                    ]
                },
                faq: {
                    title: "자주 묻는 질문",
                    questions: [
                        {
                            q: "최대 지원 품질은 무엇인가요?",
                            a: "비디오의 경우 최대 4K 해상도, 오디오의 경우 최대 320kbps를 지원합니다."
                        },
                        {
                            q: "다운로드는 얼마나 걸리나요?",
                            a: "다운로드 시간은 파일 크기와 인터넷 속도에 따라 다릅니다."
                        },
                        {
                            q: "다운로드는 오프라인으로 저장되나요?",
                            a: "네, 모든 다운로드는 장치에 로컬로 저장됩니다."
                        }
                    ]
                }
            }
        },
        howToDownloadTitle: '다운로드 방법',
        howToDownloadStep1: '브라우저 주소 표시줄에서 동영상 URL 복사',
        howToDownloadStep2: '위의 입력 상자에 URL 붙여넣기',
        howToDownloadStep3: '"형식 가져오기"를 클릭하고 원하는 품질 선택',
        howToDownloadStep4: '"다운로드"를 클릭하고 동영상 기다리기',
    }
};