use regex::RegexBuilder;
use std::collections::HashMap;

/// Count occurrences of words.
pub fn word_count(words: &str) -> HashMap<String, u32> {
    let pattern = RegexBuilder::new(r"([0-9a-z]+'[0-9a-z]+)|([0-9a-z]+)")
        .case_insensitive(true)
        .build()
        .unwrap();
    let matches: Vec<_> = pattern.find_iter(words).map(|m| m.as_str()).collect();
    let mut lexicon = HashMap::new();

    matches.iter().for_each(|m| {
        lexicon
            .entry(m.to_string().to_lowercase())
            .and_modify(|count| *count += 1)
            .or_insert(1);
    });

    lexicon
}
