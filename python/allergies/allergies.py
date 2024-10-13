from math import log, floor

class Allergies(object):
    def __init__(self, p_score):
        self.allergens = {
            1: "eggs",
            2: "peanuts",
            4: "shellfish",
            8: "strawberries",
            16: "tomatoes",
            32: "chocolate",
            64: "pollen",
            128: "cats"
            }
        self.lst = self.identify(p_score)

    def identify(self, patient_score):
        tracker = []
        allergen_string = ""
        score_list = [128, 64, 32, 16, 8, 4, 2, 1]

        if patient_score > 255:
            patient_score -= 2 ** floor(log(patient_score) / log(2))

        print(f"p_score: {patient_score}")

        for score in score_list:
            if patient_score - score >= 0 and patient_score != 0:
                tracker.append(self.allergens[score])
                allergen_string = self.allergens[score]
                patient_score -= score

        return tracker

    def allergic_to(self, allergen):
        if allergen in self.lst:
            return True
        else:
            return False
