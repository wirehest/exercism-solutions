/** Returns the modifier for a given ability score. */
export const abilityModifier = (score) => {
  if (score < 3) throw new Error('Ability scores must be at least 3');
  if (score > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((score - 10) / 2);
};

/** A representation of a D&D character's stats. */
export class Character {
  constructor() {
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(
      (x) => (this[x] = Character.rollAbility())
    );
  }

  /** Returns the sum of the largest three out of four six-sided dice rolls. */
  static rollAbility() {
    const diceRoll = () => Math.floor(Math.random() * 6) + 1;
    let rolls = [0, 0, 0, 0]
      .map(() => diceRoll())
      .sort()
      .slice(1)
      .reduce((acc, val) => acc + val, 0);
    return rolls;
  }

  get strength() {
    return this.str;
  }

  get dexterity() {
    return this.dex;
  }

  get constitution() {
    return this.con;
  }

  get intelligence() {
    return this.int;
  }

  get wisdom() {
    return this.wis;
  }

  get charisma() {
    return this.cha;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.con);
  }
}