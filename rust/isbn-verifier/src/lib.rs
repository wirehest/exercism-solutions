/// Determines whether the supplied string is a valid ISBN number
pub fn is_valid_isbn(isbn: &str) -> bool {
    let filtered = isbn.replace("-", "");
    if filtered.len() != 10 {
        return false;
    }

    let invalid_digits = !filtered[0..9].chars().all(|char| char.is_numeric());
    let invalid_check = !match filtered.chars().nth(9) {
        Some(char) => "0123456789X".contains(char),
        None => false,
    };
    if invalid_digits || invalid_check {
        return false;
    };

    filtered.chars().enumerate().fold(0, |acc, (i, char)| {
        acc + match char {
            'X' => 10,
            char => char.to_digit(10).unwrap() * (10 - i as u32),
        }
    }) % 11
        == 0
}
