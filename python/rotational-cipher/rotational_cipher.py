from collections import deque
import string

def rotate(phrase, key):
    alpha = list("abcdefghijklmnopqrstuvwxyz")
    s_alpha = deque(alpha)
    code = ""
    precode = []
    n = 0

    while n < key:
        s_alpha.append(s_alpha[0])
        s_alpha.popleft()
        n += 1

    for char in phrase:
        if char.isspace() == True\
            or char.isnumeric() == True\
            or char in string.punctuation:
                precode.append(char)

        elif char.isupper() == True:
            precode.append(s_alpha[alpha.index(char.lower())].upper())

        else:
            precode.append(s_alpha[alpha.index(char)])

    code = "".join(precode)
    return code
