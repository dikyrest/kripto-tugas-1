def encrypt(key, plainText):
    cipherText = ""
    for x in range(len(plainText)):
        cipherText += chr((ord(plainText[x]) + ord(key[x % len(key)])) % 256)
    return cipherText

def decrypt(key, cipherText):
    plainText = ""
    for x in range(len(cipherText)):
        plainText += chr((ord(cipherText[x]) - ord(key[x % len(key)])) % 256)
    return plainText