pub fn translate(input: &str) -> String {
    return input
        .to_lowercase()
        .split_whitespace()
        .map(|word| {
            if word.ends_with("y") && word.len() == 2 {
                return format!("{}{}{}", "y", &word[..1], "ay");
            }
            if ["squ", "thr", "sch"].contains(&&word[..3]) {
                return format!("{}{}{}", &word[3..], &word[..3], "ay");
            };
            if ["qu", "ch", "th"].contains(&&word[..2]) || word.starts_with("rhy") {
                return format!("{}{}{}", &word[2..], &word[..2], "ay");
            };
            if ["yt", "xr"].contains(&&word[..2]) || ["a", "e", "i", "o", "u"].contains(&&word[..1])
            {
                return format!("{}{}", word, "ay");
            };
            if word.starts_with("qa") {
                return format!("{}{}", &word[1..], "qay");
            };
            format!("{}{}{}", &word[1..], &word[..1], "ay")
        })
        .collect::<Vec<_>>()
        .join(" ");
}
