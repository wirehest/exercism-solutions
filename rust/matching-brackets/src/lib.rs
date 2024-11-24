pub fn brackets_are_balanced(string: &str) -> bool {
    let mut stack: Vec<char> = vec![];
    string.chars().all(|character| match character {
        opening_bracket @ ('[' | '{' | '(') => {
            stack.push(opening_bracket);
            true
        }
        ']' => matches!(stack.pop(), Some('[')),
        '}' => matches!(stack.pop(), Some('{')),
        ')' => matches!(stack.pop(), Some('(')),
        _ => true,
    }) && stack.is_empty()
}
