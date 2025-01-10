export class HighScores {
  #scores;

  constructor(scores) {
    this.#scores = scores;
  }

  get scores() {
    return this.#scores;
  }

  get latest() {
    return this.#scores.at(-1);
  }

  get personalBest() {
    return Math.max(...this.#scores);
  }

  get personalTopThree() {
    return this.#scores.toSorted((a, b) => b - a).slice(0, 3);
  }
}
