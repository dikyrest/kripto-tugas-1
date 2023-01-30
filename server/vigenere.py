def encrypt(key, plainText):
    cipherText = ""
    for x in range(len(plainText)):
        cipherText += chr(65 + (ord(plainText[x]) + ord(key[x % len(key)])) % 26)
    return cipherText

def decrypt(key, cipherText):
    plainText = ""
    for x in range(len(cipherText)):
        plainText += chr(65 + (ord(cipherText[x]) - ord(key[x % len(key)])) % 26)
    return plainText