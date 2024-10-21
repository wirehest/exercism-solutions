export function toRna(sequence: string): string {
  const PAIRS = { G: 'C', C: 'G', T: 'A', A: 'U' } as const;
  return [...sequence]
    .map((x) => {
      if (x in PAIRS) return PAIRS[x as keyof typeof PAIRS];
      throw new Error('Invalid input DNA.');
    })
    .join('');
}
