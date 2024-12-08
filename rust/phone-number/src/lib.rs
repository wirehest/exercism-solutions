use regex::Regex;

pub fn number(user_number: &str) -> Option<String> {
    let digits_only: String = user_number.chars().filter(|c| c.is_ascii_digit()).collect();

    if digits_only.len() != 10 && digits_only.len() != 11 {
        return None;
    }

    if digits_only.len() == 11 && !digits_only.starts_with("1") {
        return None;
    }

    let re = Regex::new(r"[2-9]\d{2}[2-9]\d{2}\d{4}$").unwrap();
    if re.is_match(&digits_only) {
        Some(re.find(&digits_only).unwrap().as_str().to_owned())
    } else {
        None
    }
}
