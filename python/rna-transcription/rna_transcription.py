def to_rna(dna):
    rnadict = {
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U"
        }

    try:
        transcribed = "".join([rnadict[x] for x in dna])

    except KeyError:
        transcribed = ""

    return transcribed
