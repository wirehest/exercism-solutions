export class Anagram {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => {
      let lettersMatch = Anagram.canon(word) === Anagram.canon(this.input);
      let wordIsNotInput = this.input.toLowerCase() !== word.toLowerCase();
      if (lettersMatch && wordIsNotInput) return word;
    });
  }

  public static canon(word: string): string {
    return [...word.toLowerCase()].sort().join('');
  }
}
