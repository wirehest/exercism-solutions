pub fn series(digits: &str, len: usize) -> Vec<String> {
    let mut substrings = Vec::new();

    if digits.is_empty() || len > digits.len() {
        return substrings;
    }

    for i in 0..=(digits.len() - len) {
        substrings.push(digits[i..i + len].to_string())
    }

    substrings
}
