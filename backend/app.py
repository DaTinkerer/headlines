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
        return "Maximum daily request limit reached.", 403
    if res["articles"] == []:
        return "No articles were found for the search query.", 404

    return jsonify(res)


@app.route("/breaking")
def breaking():
    r = requests.get(f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en")
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/business")
def business():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=business"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/entertainment")
def entertainment():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=entertainment"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/health")
def health():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=e&topic=health"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/us")
def us():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&country=us"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/science")
def science():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=science"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/sports")
def sports():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=sports"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/world")
def world():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=world"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)


@app.route("/tech")
def tech():
    r = requests.get(
        f"https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en&topic=technology"
    )
    res = r.json()
    if r.status_code == 403:
        return "Maximum daily request limit reached.", 403
    return jsonify(res)
