pub fn private_key(p: u64) -> u64 {
    p / 2
}

pub fn public_key(p: u64, g: u64, a: u64) -> u64 {
    modular_exp(g, a, p)
}

pub fn secret(p: u64, b_pub: u64, a: u64) -> u64 {
    modular_exp(b_pub, a, p)
}

fn modular_exp(mut base: u64, mut exp: u64, mut m: u64) -> u64 {
    if m == 1 {
        return 0;
    }

    // assert!(!((m - 1).overflowing_mul(m - 1)).1);

    let mut result = 1;
    base %= m;

    while exp > 0 {
        if exp % 2 == 1 {
            result = (result * base) % m;
        };
        exp >>= 1;
        base = (base * base) % m;
    }

    result
}
