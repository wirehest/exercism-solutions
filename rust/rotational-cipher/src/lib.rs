pub fn rotate(input: &str, key: u8) -> String {
    fn shift_character(c: char, key: u8) -> char {
        let min: u8 = if c <= 'Z' { 65 } else { 97 };
        char::from_u32((((c as u8 + key - min) % 26) + min) as u32).unwrap()
    }

    input
        .chars()
        .map(|c| {
            if c.is_alphabetic() {
                shift_character(c, key)
            } else {
                c
            }
        })
        .collect::<String>()
}
