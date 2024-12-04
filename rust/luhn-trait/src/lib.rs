use std::cmp::Ordering;

pub trait Luhn {
    fn valid_luhn(&self) -> bool;
}

impl<T: ToString> Luhn for T {
    fn valid_luhn(&self) -> bool {
        let code = self.to_string();
        let code_chars = code.chars().filter(|c| !c.is_whitespace());
        let has_invalid_characters = code_chars.filter(|c| !c.is_numeric()).count() > 0;
        let code_digits: Vec<u32> = code
            .chars()
            .filter(|c| c.is_numeric())
            .map(|char| char.to_digit(10).unwrap())
            .collect();

        let payload = if code_digits.len() < 2 || has_invalid_characters {
            None
        } else {
            Some(code_digits)
        };

        match payload {
            Some(payload) => {
                payload
                    .iter()
                    .rev()
                    .enumerate()
                    .map(|(i, digit)| match i % 2 {
                        0 => *digit,
                        _ => {
                            let doubled = 2 * digit;
                            match doubled.cmp(&9) {
                                Ordering::Greater => doubled - 9,
                                _ => doubled,
                            }
                        }
                    })
                    .sum::<u32>()
                    % 10
                    == 0
            }
            None => false,
        }
    }
}
