def encrypt(plaintext, key):
    """Encrypt plaintext using Vigenere cipher with key."""
    # filter out non-alphabetic characters from key
    key = ''.join([char for char in key if char.isalpha()])
    ciphertext = ''
    j = 0
    for i in range(len(plaintext)):
        if plaintext[i].isalpha():
            if plaintext[i].isupper():
                ciphertext += shift(plaintext[i], ord(key[j % len(key)].upper()) - ord('A'))
            else:
                ciphertext += shift(plaintext[i], ord(key[j % len(key)].lower()) - ord('a'))
            j += 1
        else:
            ciphertext += plaintext[i]
    return ciphertext

def decrypt(ciphertext, key):
    """Decrypt ciphertext using Vigenere cipher with key."""
    # filter out non-alphabetic characters from key
    key = ''.join([char for char in key if char.isalpha()])
    plaintext = ''
    j = 0
    for i in range(len(ciphertext)):
        if ciphertext[i].isalpha():
            if ciphertext[i].isupper():
                plaintext += shift(ciphertext[i], -ord(key[j % len(key)].upper()) + ord('A'))
            else:
                plaintext += shift(ciphertext[i], -ord(key[j % len(key)].lower()) + ord('a'))
            j += 1
        else:
            plaintext += ciphertext[i]
    return plaintext

def shift(char, n):
    """Shift char by n places."""
    if char.isupper():
        return chr((ord(char) - ord('A') + n) % 26 + ord('A'))
    else:
        return chr((ord(char) - ord('a') + n) % 26 + ord('a'))