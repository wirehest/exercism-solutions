export interface NucleotideCounts {
  A: number;
  C: number;
  G: number;
  T: number;
}

export function nucleotideCounts(str: string): NucleotideCounts {
  const STR_ARRAY = [...str];
  const nucs: NucleotideCounts = { A: 0, C: 0, G: 0, T: 0 };

  if (![...new Set(str)].every((nucleotide) => 'ACGT'.includes(nucleotide))) {
    throw new Error('Invalid nucleotide in strand');
  }

  STR_ARRAY.forEach((nuc) => nucs[nuc as keyof typeof nucs]++);
  return nucs;
}
