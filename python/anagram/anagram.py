def find_anagrams(key, candidates):
    shortlist = [word for word in candidates
                if len(word) == len(key)
                and word.lower() != key.lower()
                ]

    anagrams = []

    for word in shortlist:
        check_track = list(word.lower())

        for letter in key.lower():

            try:
                check_track.pop(check_track.index(letter))

            except ValueError:
                pass

            if len(check_track) == 0:
                anagrams.append(word)

    return anagrams
