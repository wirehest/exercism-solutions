use num::integer::Roots;

pub fn primes_up_to(upper_bound: u64) -> Vec<u64> {
    let max_factor = upper_bound.sqrt() as usize;

    // initiliaze indices 0, 1 to false so we can work with indices directly
    let mut factors = vec![false, false];
    let append_length = upper_bound.checked_sub(1).unwrap() as usize;
    factors.append(&mut vec![true; append_length]);

    for i in 2..=max_factor {
        if factors[i] {
            let mut index_of_next_multiple = 2 * i;
            while index_of_next_multiple <= upper_bound as usize {
                factors[index_of_next_multiple] = false;
                index_of_next_multiple += i;
            }
        }
    }

    factors
        .iter()
        .enumerate()
        .fold(Vec::new(), |mut acc, (i, is_prime)| {
            if *is_prime {
                acc.push(i as u64);
            }
            acc
        })
}
