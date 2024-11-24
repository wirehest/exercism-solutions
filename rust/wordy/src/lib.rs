use regex::Regex;

pub fn answer(command: &str) -> Option<i32> {
    let valid_tokens = Regex::new(r"plus|minus|multiplied|divided|cubed|-?\d+").unwrap();
    let valid_ops = Regex::new(r"plus|minus|multiplied|divided|cubed").unwrap();
    let valid_ints = Regex::new(r"-?\d+").unwrap();

    let mut tokens: Vec<_> = command
        .split_whitespace()
        .filter_map(|token| valid_tokens.find(token).map(|token| token.as_str()))
        .rev()
        .collect();

    println!("tokens: {:?}", tokens);

    let all_ints_valid = tokens
        .iter()
        .step_by(2)
        .all(|token| valid_ints.is_match(token));

    let all_ops_valid = tokens
        .iter()
        .skip(1)
        .step_by(2)
        .all(|token| valid_ops.is_match(token));

    if tokens.is_empty() || !all_ints_valid || !all_ops_valid {
        return None;
    };

    let mut result: i32 = tokens.pop().unwrap().parse().unwrap();
    while !tokens.is_empty() {
        let operation = if let Some(operation) = tokens.pop() {
            Some(operation)
        } else {
            None
        };

        let rhs: Option<i32> = if let Ok(value) = tokens.pop().unwrap().parse() {
            Some(value)
        } else {
            None
        };

        match operation {
            Some("plus") => result += rhs.unwrap(),
            Some("minus") => result -= rhs.unwrap(),
            Some("divided") => result /= rhs.unwrap(),
            Some("multiplied") => result *= rhs.unwrap(),
            Some("cubed") => return None,
            _ => return None,
        }
    }

    Some(result)
}
