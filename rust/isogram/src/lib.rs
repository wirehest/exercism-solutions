use std::collections::HashMap;

pub fn check(candidate: &str) -> bool {
    let chars: Vec<_> = candidate
        .to_lowercase()
        .chars()
        .filter(|char| *char != ' ' && *char != '-')
        .collect();

    let mut counts = HashMap::with_capacity(candidate.len());

    for char in chars {
        counts
            .entry(char)
            .and_modify(|value| *value += 1)
            .or_insert(1);
    }

    counts.values().all(|count| *count == 1)
}
