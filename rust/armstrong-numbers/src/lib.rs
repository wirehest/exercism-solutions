pub fn is_armstrong_number(num: u32) -> bool {
    let armstrong = &num.to_string();
    let length = armstrong.len() as u32;

    num == armstrong
        .chars()
        .map(|x| x.to_digit(10).unwrap().pow(length))
        .sum()
}
