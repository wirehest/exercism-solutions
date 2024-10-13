def decode(coded):
    decoded = ""
    multi = "0"

    for x in coded:
        if x.isdigit() is False and multi == "0":
            decoded += x

        elif x.isdigit() is False:
            decoded += x * int(multi)
            multi = "0"

        else:
            multi += x

    return decoded

def encode(uncoded):
    encoded = ""
    lettercounter = 1
    n = 0

    try:
        for x in uncoded:
            n += 1
            if x == uncoded[n]:
                lettercounter += 1

            elif lettercounter > 1:
                encoded += str(lettercounter) + x
                lettercounter = 1

            else:
                encoded += x
                lettercounter = 1

    except IndexError:
        if lettercounter > 1:
            encoded += str(lettercounter) + x

        else:
            encoded += x

    return encoded
