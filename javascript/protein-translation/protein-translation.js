'use strict';

/** Translate an RNA sequence into proteins. */
export const translate = (rna = []) => {
  let codons = toCodons(rna);
  let proteins = toProteins(codons);

  function toCodons(rna) {
    let codons = [];
    const STOP = ['UAA', 'UAG', 'UGA'];

    for (let i = 0; i < rna.length; i += 3) {
      let substr = rna.slice(i, i + 3);
      if (STOP.includes(substr)) break;
      codons.push(substr);
    }
    return codons;
  }

  function toProteins(codons) {
    let proteins = [];
    let PEPS = {
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
      if (PEPS[codon] === undefined) throw new Error('Invalid codon');
      proteins.push(PEPS[codon]);
    }
    return proteins;
  }
  return proteins;
};
