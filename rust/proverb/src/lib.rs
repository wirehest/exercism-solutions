pub fn build_proverb(list: &[&str]) -> String {
    let length = list.len();
    let mut proverb = String::new();

    if list.is_empty() {
        return proverb;
    }

    for i in 0..length - 1 {
        proverb += format!("For want of a {} the {} was lost.\n", list[i], list[i + 1]).as_str();
    }
    proverb += format!("And all for the want of a {}.", list[0]).as_str();

    proverb.to_string()
}
