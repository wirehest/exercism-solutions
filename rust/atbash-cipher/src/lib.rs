/// "Encipher" with the Atbash cipher.
pub fn encode(plain: &str) -> String {
    let encoded: Vec<_> = plain
        .to_lowercase()
        .chars()
        .filter(|char| char.is_alphanumeric())
        .map(|char| match char.is_numeric() {
            false => char::from_u32(122 - char as u32 + 97).unwrap(),
            true => char,
        })
        .collect();

    encoded
        .chunks(5)
        .collect::<Vec<&[_]>>()
        .join(&' ')
        .into_iter()
        .collect::<String>()
}

/// "Decipher" with the Atbash cipher.
pub fn decode(cipher: &str) -> String {
    cipher
        .chars()
        .filter(|char| char.is_alphanumeric())
        .map(|char| match char.is_numeric() {
            false => char::from_u32(122 - char as u32 + 97).unwrap(),
            true => char,
        })
        .collect()
}
