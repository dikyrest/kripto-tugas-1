import numpy as np


def convertMatriks(size, mat):
    matriks = np.zeros((size, size))
    for x in range(size):
        for y in range(size):
            matriks[x][y] = int(mat[x][y])
    return matriks


def encrypt(size, matriks, plainText):
    cipherText = ""

    split = [plainText[idx:idx+size] for idx in range(0, len(plainText), size)]
    for i in split:
        paddingNeeded = 0
        if len(i) < size:
            paddingNeeded = size - len(i)
            for j in range(paddingNeeded):
                i += "Z"
        for k in range(size - paddingNeeded):
            temp = 0
            for l in range(size):
                temp += matriks[k][l] * (ord(i[l]) - 65)
            cipherText += chr(65 + (int(temp) % 26))

    return cipherText


def decrypt(size, matriks, cipherText):
    plainText = ""

    adjointMatriks = (np.linalg.inv(matriks).T *
                      np.linalg.det(matriks)).round().transpose()
    determinan = int(np.linalg.det(matriks).round())
    if(determinan == 0 or determinan % 2 == 0 or determinan % 13 == 0):
        return "Matriks tidak invertible dengan mod 26"
    equivalenDeterminan = pow(determinan, -1, 26)
    inverseMatriks = (adjointMatriks * equivalenDeterminan) % 26
    print(inverseMatriks)

    split = [cipherText[idx:idx+size]
             for idx in range(0, len(cipherText), size)]
    for i in split:
        paddingNeeded = 0
        if len(i) < size:
            paddingNeeded = size - len(i)
            for j in range(paddingNeeded):
                i += "A"
        for k in range(size - paddingNeeded):
            temp = 0
            for l in range(size):
                temp += inverseMatriks[k][l] * (ord(i[l]) - 65)
            plainText += chr(65 + (int(temp) % 26))

    return plainText



