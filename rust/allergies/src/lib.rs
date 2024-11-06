pub struct Allergies {
    score: u32,
    positives: Vec<Allergen>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq)]
pub enum Allergen {
    Eggs,
    Peanuts,
    Shellfish,
    Strawberries,
    Tomatoes,
    Chocolate,
    Pollen,
    Cats,
}

impl Allergies {
    pub fn new(score: u32) -> Self {
        let mut allergies = Self {
            score,
            positives: Vec::new(),
        };

        allergies.positives = allergies.allergies();
        allergies
    }

    pub fn is_allergic_to(&self, allergen: &Allergen) -> bool {
        self.positives.contains(allergen)
    }

    pub fn allergies(&mut self) -> Vec<Allergen> {
        let mut positives = Vec::new();
        if self.score == 0 {
            return positives;
        }

        let mut remaining_score = self.score;

        for i in (0..=self.score.ilog2()).rev() {
            if remaining_score.checked_sub(2u32.pow(i)).is_some() {
                remaining_score -= 2u32.pow(i);
                positives.push(
                    match i {
                        0 => Some(Allergen::Eggs),
                        1 => Some(Allergen::Peanuts),
                        2 => Some(Allergen::Shellfish),
                        3 => Some(Allergen::Strawberries),
                        4 => Some(Allergen::Tomatoes),
                        5 => Some(Allergen::Chocolate),
                        6 => Some(Allergen::Pollen),
                        7 => Some(Allergen::Cats),
                        _ => continue,
                    }
                    .unwrap(),
                );
            }
        }

        positives.reverse();
        self.positives = positives.clone();
        positives
    }
}
