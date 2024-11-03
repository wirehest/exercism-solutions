pub fn square(s: u32) -> u64 {
    if s == 1 {
        return 1;
    }

    2 * square(s - 1)
}

pub fn total() -> u64 {
    let mut sum: u64 = 0;

    for i in 1..=64 {
        sum += square(i);
    }

    sum
}
