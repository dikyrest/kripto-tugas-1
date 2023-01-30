import numpy as np

def encrypt(key, plaintext):
    """Encrypts the plaintext using the Playfair cipher."""
    key = np.array(key)
    # Split the plaintext into digraphs
    digraphs = split_into_digraphs(plaintext)
    # Encrypt each digraph
    ciphertext = ''
    for digraph in digraphs:
        ciphertext += encrypt_digraph(digraph, key)
    return ciphertext

def split_into_digraphs(text):
    """Splits the text into digraphs."""
    # Split the characters into digraphs
    digraphs = []
    i = 0
    while (i < len(text)):
        if (i == len(text)-1):
            digraphs.append([text[i], 'X'])
            break
        if (text[i] == text[i + 1]):
            digraphs.append([text[i], 'X'])
            i += 1
        else:
            digraphs.append([text[i], text[i + 1]])
            i += 2
    # Add an 'X' if the last digraph has only one character
    if len(digraphs[-1]) == 1:
        digraphs[-1].append('X')
    print(digraphs)
    return digraphs

def encrypt_digraph(digraph, key):
    """Encrypts the digraph using the Playfair cipher."""
    # Get the coordinates of the digraph
    coords = [get_coords(char, key) for char in digraph]
    # If the coordinates are in the same row
    if coords[0][0] == coords[1][0]:
        # Encrypt the digraph using the same row
        return encrypt_same_row(coords, key)
    # If the coordinates are in the same column
    elif coords[0][1] == coords[1][1]:
        # Encrypt the digraph using the same column
        return encrypt_same_column(coords, key)
    # If the coordinates are in different rows and columns
    else:
        # Encrypt the digraph using the rectangle method
        return encrypt_rectangle(coords, key)

def get_coords(char, key):
    """Returns the coordinates of the character in the key."""
    # Get the row index of the character
    row = np.where(key == char)[0][0]
    # Get the column index of the character
    col = np.where(key == char)[1][0]
    return (row, col)

def encrypt_same_row(coords, key):
    """Encrypts the digraph using the same row method."""
    # Get the row index
    row = coords[0][0]
    # Get the column index of the first character
    col1 = coords[0][1]
    # Get the column index of the second character
    col2 = coords[1][1]
    # Get the encrypted characters
    char1 = key[row][(col1 + 1) % 5]
    char2 = key[row][(col2 + 1) % 5]
    return char1 + char2

def encrypt_same_column(coords, key):
    """Encrypts the digraph using the same column method."""
    # Get the column index
    col = coords[0][1]
    # Get the row index of the first character
    row1 = coords[0][0]
    # Get the row index of the second character
    row2 = coords[1][0]
    # Get the encrypted characters
    char1 = key[(row1 + 1) % 5][col]
    char2 = key[(row2 + 1) % 5][col]
    return char1 + char2

def encrypt_rectangle(coords, key):
    """Encrypts the digraph using the rectangle method."""
    # Get the row index of the first character
    row1 = coords[0][0]
    # Get the column index of the first character
    col1 = coords[0][1]
    # Get the row index of the second character
    row2 = coords[1][0]
    # Get the column index of the second character
    col2 = coords[1][1]
    # Get the encrypted characters
    char1 = key[row1][col2]
    char2 = key[row2][col1]
    return char1 + char2

# if __name__ == '__main__':
#     # Get the plaintext from the user
#     plaintext = input('Enter the plaintext: ')
#     # Get the key from the user
#     key = [["A", "L", "N", "G", "E"], ["S", "H", "P", "U", "B"], ["C", "D", "F", "I", "K"], ["M", "O", "Q", "R", "T"], ["V", "W", "X", "Y", "Z"]]
#     # Encrypt the plaintext
#     ciphertext = encrypt(plaintext, key)
#     # Print the ciphertext
#     print('The ciphertext is:', ciphertext)