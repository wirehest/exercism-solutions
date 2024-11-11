#[derive(Debug, PartialEq, Eq)]
pub struct Dna(String);

#[derive(Debug, PartialEq, Eq)]
pub struct Rna(String);

impl Dna {
    pub fn new(dna: &str) -> Result<Dna, usize> {
        if dna.is_empty() {
            return Ok(Dna("".to_owned()));
        }

        let mut chars = dna.chars();
        match chars.position(|char| !['G', 'C', 'T', 'A'].contains(&char)) {
            Some(index) => Err(index),
            None => Ok(Dna(dna.to_owned())),
        }
    }

    pub fn into_rna(&self) -> Rna {
        let nucleotides = self.0.chars();
        let translated: Option<Vec<char>> = nucleotides
            .map(|protein| match protein {
                'G' => Some('C'),
                'C' => Some('G'),
                'T' => Some('A'),
                'A' => Some('U'),
                _ => None,
            })
            .collect();
        Rna(translated.unwrap().iter().collect::<String>())
    }
}

impl Rna {
    pub fn new(rna: &str) -> Result<Rna, usize> {
        if rna.is_empty() {
            return Ok(Rna("".to_owned()));
        }

        let mut chars = rna.chars();
        match chars.position(|char| !['G', 'C', 'U', 'A'].contains(&char)) {
            Some(index) => Err(index),
            None => Ok(Rna(rna.to_owned())),
        }
    }
}
