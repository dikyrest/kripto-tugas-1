from flask import Flask, request
import re
import auto_key
import vigenere
import extended
import affine
import playfair


app = Flask(__name__)


@app.route('/vigenere/encrypt', methods=["POST"])
def vigenere_encrypt():
    key = request.json["key"].upper()
    text = re.sub(r'[^a-zA-Z]', '', request.json["text"].upper())
    result = vigenere.encrypt(key, text)
    return {
        "result": result
    }


@app.route('/vigenere/decrypt', methods=["POST"])
def vigenere_decrypt():
    key = request.json["key"].upper()
    text = re.sub(r'[^a-zA-Z]', '', request.json["text"].upper())
    result = vigenere.decrypt(key, text)
    return {
        "result": result
    }


@app.route('/autokey/encrypt', methods=["POST"])
def auto_key_encrypt():
    key = request.json["key"].upper()
    text = re.sub(r'[^a-zA-Z]', '', request.json["text"].upper())
    result = auto_key.encrypt(key, text)
    print(result)
    return {
        "result": result
    }


@app.route('/autokey/decrypt', methods=["POST"])
def auto_key_decrypt():
    key = request.json["key"].upper()
    text = re.sub(r'[^a-zA-Z]', '', request.json["text"].upper())
    result = auto_key.decrypt(key, text)
    return {
        "result": result
    }


@app.route('/extended/encrypt', methods=["POST"])
def extended_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"]
    result = extended.encrypt(key, text)
    return {
        "result": result
    }


@app.route('/extended/decrypt', methods=["POST"])
def extended_decrypt():
    key = request.json["key"].upper()
    text = request.json["text"]
    result = extended.decrypt(key, text)
    return {
        "result": result
    }


@app.route('/affine/encrypt', methods=['POST'])
def affine_encrypt():
    key = request.json["key"].split(";")
    text = request.json["text"].upper().replace(" ", "")
    result = affine.encrypt(int(key[0]), int(key[1]), text)
    return {
        "result": result
    }


@app.route('/affine/decrypt', methods=['POST'])
def affine_decrypt():
    key = request.json["key"].split(";")
    text = request.json["text"].upper().replace(" ", "")
    result = affine.decrypt(int(key[0]), int(key[1]), text)
    return {
        "result": result
    }


@app.route('/playfair/encrypt', methods=['POST'])
def playfair_encrypt():
    key = request.json["key"]
    key = [[char.upper() for char in row] for row in key]
    text = re.sub(r'[^a-zA-Z]', '', request.json["text"].upper())
    result = playfair.encrypt(key, text)
    return {
        "result": result
    }


if __name__ == "__main__":
    app.run(debug=True)
