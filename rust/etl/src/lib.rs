use std::collections::BTreeMap;

pub fn transform(many_to_one: &BTreeMap<i32, Vec<char>>) -> BTreeMap<char, i32> {
    let mut one_to_one: BTreeMap<char, i32> = BTreeMap::new();

    for (score, letters) in many_to_one.iter() {
        for letter in letters {
            one_to_one.insert(letter.to_ascii_lowercase(), *score);
        }
    }

    one_to_one
}
