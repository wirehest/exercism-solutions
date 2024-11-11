use regex::Regex;

pub fn abbreviate(phrase: &str) -> String {
    let re = Regex::new(r"[A-Z]+[a-z']*|[a-z']+").unwrap();
    let words: Vec<_> = re.find_iter(phrase).map(|m| m.as_str()).collect();

    words
        .iter()
        .map(|word| {
            let mut chars = word.chars();
            match chars.next() {
                None => String::new(),
                Some(char) => char.to_uppercase().collect::<String>(),
            }
        })
        .collect::<String>()
}
