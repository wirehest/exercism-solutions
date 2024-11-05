/// Check a Luhn checksum.
pub fn is_valid(code: &str) -> bool {
    if !code
        .chars()
        .all(|char| char.is_whitespace() || char.is_numeric())
    {
        return false;
    }

    if code
        .chars()
        .filter(|char| char.is_numeric())
        .collect::<String>()
        .len()
        == 1
    {
        return false;
    }

    code.chars()
        .filter(|char| char.is_numeric())
        .rev()
        .map(|char| char.to_digit(10).unwrap())
        .enumerate()
        .map(|(i, digit)| {
            if i % 2 != 0 {
                if 2 * digit > 9 {
                    2 * digit - 9
                } else {
                    2 * digit
                }
            } else {
                digit
            }
        })
        .sum::<u32>()
        % 10
        == 0
}

