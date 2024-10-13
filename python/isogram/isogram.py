def is_isogram(word):
    letters = "".join([x for x in word.lower().replace(" ", "") if x.isalpha() == True])

    if len(letters) != len(set(letters)):
        return False

    else:
        return True
