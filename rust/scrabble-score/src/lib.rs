/// Compute the Scrabble score for a word.
pub fn score(word: &str) -> u64 {
    word.chars().fold(0, |acc, char| {
        acc + match &char.to_string().to_uppercase() {
            c if "AEIOULNRST".contains(c) => 1,
            c if "DG".contains(c) => 2,
            c if "BCMP".contains(c) => 3,
            c if "FHVWY".contains(c) => 4,
            c if c == "K" => 5,
            c if "JX".contains(c) => 8,
            c if "QZ".contains(c) => 10,
            _ => 0,
        }
    })
}
