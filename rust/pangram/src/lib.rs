use std::collections::HashMap;

/// Determine whether a sentence is a pangram.
pub fn is_pangram(sentence: &str) -> bool {
    let mut counts = HashMap::with_capacity(26);

    "abcdefghijklmnopqrstuvwxyz".chars().for_each(|letter| {
        counts.insert(letter, 0);
    });

    sentence
        .to_lowercase()
        .chars()
        .filter(|char| char.is_alphabetic())
        .for_each(|char| {
            counts.entry(char).and_modify(|value| *value += 1);
        });

    counts.values().all(|value| *value >= 1)
}
