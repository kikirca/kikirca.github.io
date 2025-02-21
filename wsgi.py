
from app import app  



# This makes the app object available to Gunicorn or any WSGI server
if __name__ == "__main__":
    app.run()