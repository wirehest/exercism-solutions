/** A representation of allergy test results. */
export class Allergies {
  constructor(score) {
    this.score = score;
    this.positives = this.list();
  }

  list() {
    const allergens = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ];
    let remainingScore = this.score;
    let positives = [];

    for (let i = Math.floor(Math.log2(this.score)); i >= 0; i--) {
      if (remainingScore - 2 ** i >= 0) {
        if (allergens[i]) positives.push(allergens[i]);
        remainingScore -= 2 ** i;
      }
    }
    return positives.reverse();
  }

  allergicTo(allergen) {
    return this.positives.includes(allergen) ? true : false;
  }
}
