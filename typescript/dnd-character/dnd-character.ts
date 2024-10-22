export class DnDCharacter {
  strength = 3;
  dexterity = 3;
  constitution = 3;
  intelligence = 3;
  wisdom = 3;
  charisma = 3;
  hitpoints = 6;

  constructor() {
    [
      this.strength,
      this.dexterity,
      this.constitution,
      this.intelligence,
      this.wisdom,
      this.charisma,
    ].forEach((attribute) => (attribute = DnDCharacter.generateAbilityScore()));
    this.hitpoints = Math.floor((10 + this.constitution) / 2);
  }

  public static generateAbilityScore(): number {
    const diceRoll = () => Math.floor(Math.random() * 6) + 1;
    return Math.min(
      18,
      [0, 0, 0, 0]
        .map(diceRoll)
        .sort()
        .slice(1)
        .reduce((acc, val) => acc + val, 0),
    );
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
