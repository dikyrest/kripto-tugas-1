from flask import Flask, request
from auto_key import *


app = Flask(__name__)


@app.route('/vigenere/encrypt', methods=["POST"])
def vigenere_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = encrypt(key, text)
    return {
        "result": result
    }


@app.route('/vigenere/decrypt', methods=["POST"])
def vigenere_decrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = decrypt(key, text)
    return {
        "result": result
    }


@app.route('/autokey/encrypt', methods=["POST"])
def auto_key_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = encrypt(key, text)
    return {
        "result": result
    }


@app.route('/autokey/decrypt', methods=["POST"])
def auto_key_decrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = decrypt(key, text)
    return {
        "result": result
    }


if __name__ == "__main__":
    app.run(debug=True)
