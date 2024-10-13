import string

def response(phrase):
    phrase = phrase.strip()
    nopunc = "".join([x for x in phrase if x not in string.punctuation])

    if len(phrase) == 0:
        return "Fine. Be that way!"
        
    elif nopunc.isupper() and phrase.endswith("?") is True:
        return "Calm down, I know what I'm doing!"
        
    elif nopunc.isupper() is True:
        return "Whoa, chill out!"
        
    elif phrase.endswith("?"):
        return "Sure."

    else:
        return "Whatever."
