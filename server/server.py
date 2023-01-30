from flask import Flask, request
import auto_key
import vigenere
import extended


app = Flask(__name__)


@app.route('/vigenere/encrypt', methods=["POST"])
def vigenere_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = vigenere.encrypt(key, text)
    result = " ".join([result[i:i+5] for i in range(0, len(result), 5)])
    return {
        "result": result
    }


@app.route('/vigenere/decrypt', methods=["POST"])
def vigenere_decrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = vigenere.decrypt(key, text)
    return {
        "result": result
    }


@app.route('/autokey/encrypt', methods=["POST"])
def auto_key_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = auto_key.encrypt(key, text)
    result = " ".join([result[i:i+5] for i in range(0, len(result), 5)])
    return {
        "result": result
    }


@app.route('/autokey/decrypt', methods=["POST"])
def auto_key_decrypt():
    key = request.json["key"].upper()
    text = request.json["text"].upper().replace(" ", "")
    result = auto_key.decrypt(key, text)
    return {
        "result": result
    }


@app.route('/extended/encrypt', methods=["POST"])
def extended_encrypt():
    key = request.json["key"].upper()
    text = request.json["text"]
    result = extended.encrypt(key, text)
    result = " ".join([result[i:i+5] for i in range(0, len(result), 5)])
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


if __name__ == "__main__":
    app.run(debug=True)
