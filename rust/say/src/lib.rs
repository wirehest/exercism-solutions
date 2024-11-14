use std::collections::HashMap;

pub fn encode(n: u64) -> String {
    if n == 0 {
        return String::from("zero");
    }

    let chunk_to_scale: HashMap<u64, &str> = HashMap::from([
        (1, "thousand"),
        (2, "million"),
        (3, "billion"),
        (4, "trillion"),
        (5, "quadrillion"),
        (6, "quintillion"),
        (7, "sextillion"),
    ]);
    let number_to_words: HashMap<u64, &str> = HashMap::from([
        (1, "one"),
        (2, "two"),
        (3, "three"),
        (4, "four"),
        (5, "five"),
        (6, "six"),
        (7, "seven"),
        (8, "eight"),
        (9, "nine"),
        (10, "ten"),
        (11, "eleven"),
        (12, "twelve"),
        (13, "thirteen"),
        (14, "fourteen"),
        (15, "fifteen"),
        (16, "sixteen"),
        (17, "seventeen"),
        (18, "eighteen"),
        (19, "nineteen"),
        (20, "twenty"),
        (30, "thirty"),
        (40, "forty"),
        (50, "fifty"),
        (60, "sixty"),
        (70, "seventy"),
        (80, "eighty"),
        (90, "ninety"),
    ]);

    let digits: Vec<_> = n.to_string().chars().collect();
    let chunks = digits.rchunks(3);
    let mut results: Vec<Vec<String>> = Vec::new();

    for (i, chunk) in chunks.enumerate() {
        let mut num: u64 = chunk.iter().collect::<String>().parse().unwrap();
        let mut words: Vec<String> = Vec::new();

        if num > 99 {
            words.push(number_to_words.get(&(num / 100)).unwrap().to_string());
            words.push(String::from("hundred"));
        }

        num %= 100;
        if num > 0 {
            if number_to_words.contains_key(&num) {
                words.push(number_to_words.get(&(num % 100)).unwrap().to_string());
            } else {
                let tens = if let Some(tens) = number_to_words.get(&((num / 10) * 10)) {
                    tens.to_string()
                } else {
                    "".to_string()
                };
                let ones = number_to_words.get(&(num % 10)).unwrap().to_string();
                words.push(format!("{tens}-{ones}"));
            }

            if i > 0 {
                words.push(chunk_to_scale.get(&(i as u64)).unwrap().to_string());
            }
        }

        results.push(words);
    }

    results
        .into_iter()
        .rev()
        .flatten()
        .collect::<Vec<_>>()
        .join(" ")
}
