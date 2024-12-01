use std::cmp::Ordering;

/// Check a Luhn checksum.
pub fn is_valid(code: &str) -> bool {
    let code_chars = code.chars().filter(|c| !c.is_whitespace());
    let has_invalid_characters = code_chars.filter(|c| !c.is_numeric()).count() > 0;
    let code_digits: Vec<_> = code.chars().filter(|c| c.is_numeric()).collect();

    if code_digits.len() < 2 || has_invalid_characters {
        return false;
    }

    code_digits
        .iter()
        .rev()
        .map(|char| char.to_digit(10).unwrap())
        .enumerate()
        .map(|(i, digit)| match i % 2 {
            0 => digit,
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
