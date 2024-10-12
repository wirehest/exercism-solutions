pub fn egg_count(display_value: u32) -> usize {
    let binary = format!("{display_value:b}");
    binary
        .chars()
        .fold(0, |acc, bit| acc + bit.to_digit(10).unwrap()) as usize
}
