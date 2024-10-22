export class Robot {
  #name: string;
  static usedNames = new Set();

  constructor() {
    this.#name = Robot.makeName();
    Robot.usedNames.add(this.#name);
  }

  public get name(): string {
    return this.#name;
  }

  public resetName(): void {
    let tempName: string;
    do {
      tempName = Robot.makeName();
    } while (Robot.usedNames.has(tempName));
    this.#name = tempName;
    Robot.usedNames.add(this.#name);
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  public static makeName(): string {
    let randomAlpha = (): number => Math.floor(Math.random() * 26) + 65;
    let randomNumeric = (): number => Math.floor(Math.random() * 10) + 48;

    return [0, 1]
      .map(randomAlpha)
      .concat([2, 3, 4].map(randomNumeric))
      .reduce((acc, x) => acc + String.fromCharCode(x), '');
  }
}
