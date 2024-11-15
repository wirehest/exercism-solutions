use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let chars = make_char_set(word);

    possible_anagrams
        .iter()
        .filter(|candidate| {
            make_char_set(candidate) == chars && candidate.to_lowercase() != word.to_lowercase()
        })
        .copied()
        .collect()
}

fn make_char_set(word: &str) -> Vec<char> {
    let mut characters = word.to_lowercase().chars().collect::<Vec<_>>();
    characters.sort();
    characters
}
