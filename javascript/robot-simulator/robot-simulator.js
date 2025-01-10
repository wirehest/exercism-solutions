export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  static validBearings = ['north', 'east', 'south', 'west'];
  #bearing;
  #coordinates;

  constructor() {
    this.#bearing = 'north';
    this.#coordinates = { x: 0, y: 0 };
  }

  get bearing() {
    return this.#bearing;
  }

  get coordinates() {
    return [this.#coordinates.x, this.#coordinates.y];
  }

  place({ x, y, direction }) {
    if (!this.#isValidBearing(direction)) throw new InvalidInputError();
    this.#bearing = direction;
    this.#coordinates = { x, y };
  }

  evaluate(instructions) {
    instructions.split('').forEach((instruction) => {
      switch (instruction) {
        case 'R':
        case 'L':
          return this.#turn(instruction);
        case 'A':
          return this.#advance();
        default:
          throw new InvalidInputError();
      }
    });
  }

  #isValidBearing(bearing) {
    return Robot.validBearings.includes(bearing);
  }

  #turn(instruction) {
    const RIGHT_TURNS = {
      north: 'east',
      east: 'south',
      south: 'west',
      west: 'north',
    };
    const LEFT_TURNS = {
      north: 'west',
      east: 'north',
      south: 'east',
      west: 'south',
    };

    if (instruction === 'R') {
      this.#bearing = RIGHT_TURNS[this.#bearing];
    } else {
      this.#bearing = LEFT_TURNS[this.#bearing];
    }

    return this;
  }

  #advance() {
    if (this.#bearing === 'north') ++this.#coordinates.y;
    if (this.#bearing === 'east') ++this.#coordinates.x;
    if (this.#bearing === 'south') --this.#coordinates.y;
    if (this.#bearing === 'west') --this.#coordinates.x;
    return this;
  }
}
