use std::collections::HashMap;

const NUCLEOTIDES: [char; 4] = ['A', 'C', 'T', 'G'];

pub fn count(nucleotide: char, dna: &str) -> Result<usize, char> {
    let invalid = dna
        .chars()
        .filter(|nucleotide| !NUCLEOTIDES.contains(nucleotide))
        .collect::<Vec<_>>();

    if !NUCLEOTIDES.contains(&nucleotide) {
        return Err(nucleotide);
    }

    if !invalid.is_empty() {
        return Err(invalid[0]);
    }

    Ok(dna.chars().filter(|char| *char == nucleotide).count())
}

pub fn nucleotide_counts(dna: &str) -> Result<HashMap<char, usize>, char> {
    let invalid = dna
        .chars()
        .filter(|nucleotide| !NUCLEOTIDES.contains(nucleotide))
        .collect::<Vec<_>>();

    if !invalid.is_empty() {
        return Err(invalid[0]);
    }

    let mut counts = HashMap::new();
    counts.insert('A', 0);
    counts.insert('C', 0);
    counts.insert('T', 0);
    counts.insert('G', 0);

    dna.chars().for_each(|nucleotide| {
        counts.entry(nucleotide).and_modify(|count| *count += 1);
    });

    Ok(counts)
}
