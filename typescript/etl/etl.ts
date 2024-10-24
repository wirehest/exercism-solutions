interface OneToMany {
  [score: number]: string[];
}

interface ManyToOne {
  [letter: string]: number;
}

export function transform(old: OneToMany): ManyToOne {
  return Object.fromEntries(
    Object.entries(old).flatMap(([score, letters]) => {
      return letters.map(<K extends keyof ManyToOne>(letter: K) => {
        return [String(letter).toLowerCase(), +score];
      });
    }),
  );
}
