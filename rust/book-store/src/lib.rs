use std::collections::HashSet;

pub fn lowest_price(books: &[u32]) -> u32 {
    const PRICE: f64 = 800.0;
    const DISCOUNTS: [f64; 5] = [1.00, 0.95, 0.90, 0.80, 0.75];
    let mut basket = books.to_vec();
    basket.sort();

    let mut sets: Vec<_> = vec![];

    while !basket.is_empty() {
        let unique_books: HashSet<_> = HashSet::from_iter(basket.to_vec());
        let set_size = unique_books.len() as f64;
        sets.push(set_size);

        for book in unique_books {
            let index = basket.iter().position(|x| x == &book).unwrap();
            basket.remove(index);
        }
    }

    while sets.contains(&3.0) && sets.contains(&5.0) {
        [3.0, 5.0].iter().for_each(|size| {
            let index = sets.iter().position(|set_size| set_size == size).unwrap();
            sets.remove(index);
        });
        sets.append(&mut vec![4.0, 4.0]);
    }

    sets.into_iter().fold(0.0, |acc, set_size| {
        acc + set_size * PRICE * DISCOUNTS[(set_size - 1.0) as usize]
    }) as u32
}
