use std::fmt::Display;

#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq + Display>(_first_list: &[T], _second_list: &[T]) -> Comparison {
    let first_string = stringify(_first_list);
    let second_string = stringify(_second_list);

    if first_string == second_string {
        Comparison::Equal
    } else if first_string.contains(&second_string) || second_string.is_empty() {
        Comparison::Superlist
    } else if second_string.contains(&first_string) || first_string.is_empty() {
        Comparison::Sublist
    } else {
        Comparison::Unequal
    }
}

fn stringify<T: Display>(slice: &[T]) -> String {
    slice
        .iter()
        .map(|element| element.to_string())
        .collect::<Vec<_>>()
        .join(",")
        + ","
}
