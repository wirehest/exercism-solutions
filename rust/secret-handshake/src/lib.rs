pub fn actions(n: u8) -> Vec<&'static str> {
    const ACTIONS: [&str; 4] = ["wink", "double blink", "close your eyes", "jump"];

    let bin = format!("{n:b}");
    let mut digits = bin.as_bytes().to_vec();
    digits.reverse();

    let mut handshake: Vec<_> = (0..5)
        .filter_map(|i| match digits.get(i) {
            Some(d) if *d == b'1' => ACTIONS.get(i).copied(),
            _ => None,
        })
        .collect();

    if digits.len() > 4 {
        handshake.reverse();
    }

    handshake
}
