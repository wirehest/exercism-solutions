use std::collections::BTreeMap;
use std::fmt::{Display, Formatter, Result};

pub struct Roman {
    romanized: String,
}

impl Display for Roman {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        write!(f, "{}", self.romanized)
    }
}

impl From<u32> for Roman {
    fn from(num: u32) -> Self {
        let numerals = BTreeMap::from([
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I"),
        ]);
        let mut remaining = num;
        let mut romanized = String::new();

        for (arabic, roman) in numerals.iter().rev() {
            let count = remaining / arabic;
            romanized += roman.repeat(count as usize).as_str();
            remaining -= count * arabic;
        }

        Self { romanized }
    }
}
