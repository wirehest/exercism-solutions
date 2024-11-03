pub fn is_armstrong_number(num: u32) -> bool {
    let armstrong = &num.to_string();
    let length = armstrong.len() as u32;
    let armstrong = armstrong
        .chars()
        .fold(0, |acc, x| acc + x.to_digit(10).unwrap().pow(length));

    armstrong == num
}
