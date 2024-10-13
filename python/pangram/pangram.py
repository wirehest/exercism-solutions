def is_pangram(phrase):
    alpha = list("abcdefghijklmnopqrstuvwxyz")

    letters = set("".join([x for x in phrase.lower().replace(" ", "") if x.isalpha() == True]))

    for x in letters:
        alpha.pop(alpha.index(x))

    if len(alpha) > 0:
        return False

    else:
        return True
