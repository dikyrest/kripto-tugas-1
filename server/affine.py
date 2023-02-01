import numpy as np


def encrypt(pengali, pergeseran, plainText):
    if(np.gcd(pengali, 26) != 1):
        return "Nilai A harus relatif prima terhadap 26!"
    cipherText = ""
    for x in range(len(plainText)):
        cipherText += chr(65 +
                          (((ord(plainText[x]) - 65)*pengali + pergeseran) % 26))
    return cipherText


def decrypt(pengali, pergeseran, cipherText):
    if(np.gcd(pengali, 26) != 1):
        return "Nilai A harus relatif prima terhadap 26!"
    plainText = ""
    inversePengali = pow(pengali, -1, 26)
    for x in range(len(cipherText)):
        plainText += chr(65 + ((inversePengali *
                         (ord(cipherText[x]) - 65 - pergeseran)) % 26))
    return plainText


# if (__name__) == "__main__":
#     plainText = input("Masukkan plaintext: ").upper().replace(" ", "")
#     pengali = int(input("Masukkan nilai m: "))
#     pergeseran = int(input("Masukkan pergeseran: "))
#     cipher = encrypt(pengali, pergeseran, plainText)
#     print(cipher)
#     print(decrypt(pengali, pergeseran, cipher))
