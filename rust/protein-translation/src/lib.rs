pub fn translate(rna: &str) -> Option<Vec<&str>> {
    let codons = to_codons(rna);
    to_proteins(codons)
}

fn to_codons(rna: &str) -> Vec<String> {
    let mut codons: Vec<String> = rna
        .chars()
        .collect::<Vec<_>>()
        .chunks(3)
        .map(|chunk| chunk.iter().collect())
        .collect();
    let stop = codons
        .iter()
        .position(|codon| ["UAA", "UAG", "UGA"].contains(&codon.as_str()));
    if let Some(i) = stop {
        codons.truncate(i)
    };

    codons
}

fn to_proteins<'a>(codons: Vec<String>) -> Option<Vec<&'a str>> {
    let mut proteins: Vec<Option<&'a str>> = vec![];

    for codon in codons {
        let protein = match codon.as_str() {
            "AUG" => Some("Methionine"),
            "UUU" | "UUC" => Some("Phenylalanine"),
            "UUA" | "UUG" => Some("Leucine"),
            "UCU" | "UCC" | "UCA" | "UCG" => Some("Serine"),
            "UAU" | "UAC" => Some("Tyrosine"),
            "UGU" | "UGC" => Some("Cysteine"),
            "UGG" => Some("Tryptophan"),
            _ => None,
        };

        proteins.push(protein);
    }

    proteins.into_iter().collect()
}
