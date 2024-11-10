#[derive(Debug, PartialEq, Eq)]
pub enum Classification {
    Abundant,
    Perfect,
    Deficient,
}

pub fn classify(num: u64) -> Option<Classification> {
    if num == 0 {
        return None;
    }

    let mut aliquot = Vec::new();
    for i in 1..num {
        if num % i == 0 {
            aliquot.push(i);
        }
    }

    let aliquot_sum = aliquot.iter().sum();

    if num == aliquot_sum {
        return Some(Classification::Perfect);
    }

    if num < aliquot_sum {
        return Some(Classification::Abundant);
    }

    Some(Classification::Deficient)
}
