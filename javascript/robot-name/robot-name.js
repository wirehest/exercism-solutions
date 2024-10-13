/** Representation of robot names. */
export class Robot {
  usedNames = [];

  constructor() {
    this.robotName = this.makeName();
    this.usedNames.push(this.robotName);
  }

  get name() {
    return this.robotName;
  }

  reset() {
    let tempName = null;
    do {
      tempName = this.makeName();
    } while (this.usedNames.includes(tempName));
    this.robotName = tempName;
    this.usedNames.push(this.robotName);
  }

  makeName() {
    let randomAlpha = () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    let randomNumeric = () => {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };

    return (
      '' +
      randomAlpha() +
      randomAlpha() +
      randomNumeric() +
      randomNumeric() +
      randomNumeric()
    );
  }
}

Robot.releaseNames = () => {};
