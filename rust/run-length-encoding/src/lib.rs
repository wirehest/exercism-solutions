use regex::Regex;
use std::fmt::Write;

pub fn encode(source: &str) -> String {
    source
        .as_bytes()
        .chunk_by(|a, b| a == b)
        .fold(String::new(), |mut acc, chunk| {
            let letter_bytes = [*chunk.first().unwrap()];
            let letter = std::str::from_utf8(&letter_bytes).unwrap();
            let count = if chunk.len() > 1 {
                chunk.len().to_string()
            } else {
                "".to_string()
            };
            write!(acc, "{count}{letter}");

            acc
        })
}

pub fn decode(source: &str) -> String {
    let re = Regex::new(r"\d+|[\sa-zA-Z]").unwrap();
    let coded: Vec<_> = re.find_iter(source).map(|m| m.as_str()).collect();

    let mut decoded = String::new();
    let mut repeat_count = 1;

    for c in coded {
        if let Ok(count) = c.parse() {
            repeat_count = count;
        } else {
            let s = c.repeat(repeat_count);
            write!(decoded, "{s}");
            repeat_count = 1;
        }
    }

    decoded
}
