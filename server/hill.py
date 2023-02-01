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
    equivalenDeterminan = pow(int(np.linalg.det(matriks).round()), -1, 26)
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
            # if paddingNeeded != 0:

            temp = 0
            for l in range(size):
                temp += inverseMatriks[k][l] * (ord(i[l]) - 65)
            plainText += chr(65 + (int(temp) % 26))

    return plainText


if (__name__) == "__main__":
    plainText = input("Masukkan plainText: ").upper().replace(" ", "")
    size = int(input("Masukkan ukuran matriks: "))
    arr = []
    for x in range(size):
        temp = []
        for y in range(size):
            temp.append(
                int(input("Masukkan elemen ke-" + str(x*3 + y) + ": ")))
        arr.append(temp)
    matriks = convertMatriks(size, arr)
    print(matriks)
    print(np.linalg.det(matriks).round())
    print(decrypt(3, matriks, plainText))
    #print(decrypt(size, matriks, plainText))
    # cofactor = np.linalg.inv(matriks).T * np.linalg.det(matriks)
    # cofactor = cofactor.round()
    # perDet = pow(int(np.linalg.det(matriks)), -1, 26)
    # print("determinant: ", np.linalg.det(matriks))
    # print((cofactor * perDet) % 26)
