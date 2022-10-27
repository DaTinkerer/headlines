from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
from decouple import config
import requests

app = Flask(__name__)
app.secret_key = config("SECRET_KEY")
CORS(app)
api_key = config("key")


@app.route("/search", methods=["POST"])
def search():
    data = request.get_json()
    search_input = data["input"]
    r = requests.get(
        f'https://gnews.io/api/v4/search?q="{search_input}"&token={api_key}&lang=en'
    )
    res = r.json()
    if r.status_code == 400:
        return "Oops, there was a syntax error with the search query.", 400
    if r.status_code == 403:
        return "Maximum daily requuuest limit reached.", 403
    if res["articles"] == []:
        return "No articles were found for the search query.", 404

    return jsonify(res)


@app.route("/breaking")
def breaking():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&max=12")
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/articles", methods=["POST"])
def get_articles():
    data = request.get_json()
    topic = data["topic"]
    page = data["page"]
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&topic={topic}&lang=en&max=12&page={page}"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)
