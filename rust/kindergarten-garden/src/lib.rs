use std::collections::HashMap;

pub fn plants(diagram: &str, student: &str) -> Vec<&'static str> {
    let students: [&str; 12] = [
        "Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph",
        "Kincaid", "Larry",
    ];
    let plant_names: HashMap<char, &'static str> = HashMap::from([
        ('G', "grass"),
        ('C', "clover"),
        ('R', "radishes"),
        ('V', "violets"),
    ]);

    let position = 2 * students
        .iter()
        .position(|s| *s == student)
        .expect("should receive valid student name");

    let plant_encodings = diagram
        .lines()
        .map(|row| &row[position..position + 2])
        .collect::<String>();

    plant_encodings
        .chars()
        .map(|encoding| *plant_names.get(&encoding).unwrap())
        .collect::<Vec<&'static str>>()
}
