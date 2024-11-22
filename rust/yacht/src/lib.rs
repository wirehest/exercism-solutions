pub enum Category {
    Ones,
    Twos,
    Threes,
    Fours,
    Fives,
    Sixes,
    FullHouse,
    FourOfAKind,
    LittleStraight,
    BigStraight,
    Choice,
    Yacht,
}

type Dice = [u8; 5];

pub fn score(dice: Dice, category: Category) -> u8 {
    let mut rolls = dice.to_vec();
    rolls.sort();
    println!("{:?}", rolls);

    use Category::*;
    match category {
        Ones | Twos | Threes | Fours | Fives | Sixes => {
            let factor = category as u8 + 1;
            factor
                * (rolls
                    .iter()
                    .filter(|roll| *roll == &factor)
                    .collect::<Vec<_>>()
                    .len()) as u8
        }
        FullHouse => {
            let mut uniques = rolls.to_vec();
            uniques.dedup();

            if uniques.len() != 2 {
                return 0;
            }

            if rolls[0..2].iter().all(|roll| *roll == rolls[0])
                && rolls[3..].iter().all(|roll| *roll == rolls[4])
            {
                return rolls.iter().sum();
            }

            0
        }
        FourOfAKind => {
            if rolls[0..4].iter().all(|roll| *roll == rolls[0]) {
                return 4 * rolls[0];
            };

            if rolls[1..5].iter().all(|roll| *roll == rolls[4]) {
                return 4 * rolls[4];
            }

            0
        }
        LittleStraight | BigStraight => {
            for i in 1..5 {
                if rolls[i as usize] != rolls[i as usize - 1] + 1 {
                    return 0;
                };
            }

            if let LittleStraight = category {
                if rolls[0] == 1 {
                    return 30;
                } else {
                    return 0;
                }
            }

            if rolls[0] > 1 {
                30
            } else {
                0
            }
        }
        Choice => rolls.iter().sum(),
        Yacht => {
            if rolls.iter().all(|roll| *roll == rolls[0]) {
                50
            } else {
                0
            }
        }
    }
}
