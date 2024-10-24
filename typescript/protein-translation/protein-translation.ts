type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

interface CodonProteinMap {
  [codon: string]: Protein;
}

type ToCodons = (rna: string) => string[];
type ToProteins = (codons: string[]) => Protein[];

export function translate(
  rna: string,
  codonFunction: ToCodons = toCodons,
  proteinFunction: ToProteins = toProteins,
): Protein[] {
  let codons = codonFunction(rna);
  let proteins = proteinFunction(codons);

  return proteins;
}

function toCodons(rna: string): string[] {
  let codons = [];
  const STOP = ['UAA', 'UAG', 'UGA'];

  for (let i = 0; i < rna.length; i += 3) {
    let substring = rna.slice(i, i + 3);
    if (STOP.includes(substring)) break;
    codons.push(substring);
  }

  return codons;
}

function toProteins(codons: string[]): Protein[] {
  let proteins: Protein[] = [];
  const PEPS: CodonProteinMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
  };

  for (let codon of codons) {
    if (!(codon in PEPS)) throw new Error('Invalid codon');
    proteins.push(PEPS[codon]);
  }

  return proteins;
}
