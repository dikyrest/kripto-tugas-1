def encrypt(key, plainText):
    cipherText = ""
    for x in range(len(plainText)):
        cipherText += chr(65 + (ord(plainText[x]) + ord(key[x % len(key)])) % 26)
    return cipherText

def decrypt(key, cipherText):
    plainText = ""
    for x in range(len(cipherText)):
        if(x < len(key)):
            plainText += chr(65 + (ord(cipherText[x]) - ord(key[x % len(key)])) % 26)
        else:
            plainText += chr(65 + (ord(cipherText[x]) - ord(plainText[x-len(key)])) % 26)
    return plainText