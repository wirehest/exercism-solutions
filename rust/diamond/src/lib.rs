pub fn get_diamond(c: char) -> Vec<String> {
    let spacer = " ";
    let length = (u32::from(c) - 65) as usize;
    let top_half: Vec<String> = (0..=length)
        .map(|i| {
            let outer = spacer.repeat(length - i);
            let inner_length = (2 * i as u32).saturating_sub(1) as usize;
            let inner = spacer.repeat(inner_length);
            let row_char = char::from_u32(65 + i as u32).unwrap();

            match i {
                0 => format!("{outer}{row_char}{outer}"),
                _ => format!("{outer}{row_char}{inner}{row_char}{outer}"),
            }
        })
        .collect();

    let mut bottom_half = top_half.clone();
    bottom_half.pop();
    bottom_half.reverse();

    [top_half, bottom_half].concat()
}
