use std::cmp;

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub struct Item {
    pub weight: u32,
    pub value: u32,
}

pub fn maximum_value(max_weight: u32, items: &[Item]) -> u32 {
    let mut knapsack = vec![0; (max_weight + 1) as usize];

    for item in items {
        for capacity in (0..=max_weight).rev() {
            let previous_value = knapsack[capacity as usize];
            knapsack[capacity as usize] = if item.weight <= capacity {
                let remainder_value = knapsack[(capacity - item.weight) as usize];
                let current_value = item.value + remainder_value;
                cmp::max(current_value, previous_value)
            } else {
                previous_value
            }
        }
    }

    *knapsack.last().unwrap()
}
