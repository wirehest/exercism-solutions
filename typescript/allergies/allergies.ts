export class Allergies {
  allergenIndex: number;
  positives: string[];

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
    this.positives = this.list();
  }

  public list(): string[] {
    const ALLERGENS = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ];
    let remainingScore = this.allergenIndex;
    let positives = [];

    for (let i = Math.floor(Math.log2(this.allergenIndex)); i >= 0; i--) {
      if (remainingScore - 2 ** i >= 0) {
        if (ALLERGENS[i]) positives.push(ALLERGENS[i]);
        remainingScore -= 2 ** i;
      }
    }
    return positives.reverse();
  }

  public allergicTo(allergen: string): boolean {
    return this.positives.includes(allergen);
  }
}
