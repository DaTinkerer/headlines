from flask import Flask
from flask_cors import CORS
from decouple import config

app = Flask(__name__)
app.secret_key = config('SECRET_KEY')
CORS(app)

@app.route("/")
def test():
    return "<h1>hello</h1>"