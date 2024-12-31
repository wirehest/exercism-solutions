export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || 'Invalid Input';
  }
}

type Direction = 'north' | 'east' | 'south' | 'west';
type Coordinates = [number, number];
type Turns = {
  [key in Direction]: Direction;
};

export class Robot {
  facing: Direction;
  position: Coordinates;

  constructor() {
    this.facing = 'north';
    this.position = [0, 0];
  }

  get bearing(): Direction {
    return this.facing;
  }

  get coordinates(): Coordinates {
    return this.position;
  }

  place(input: { x: number; y: number; direction: string }) {
    if (!['north', 'east', 'south', 'west'].includes(input.direction)) {
      throw new InvalidInputError('invalid direction');
    }

    this.facing = input.direction as Direction;
    this.position = [input.x, input.y];
  }

  evaluate(instructions: string) {
    instructions.split('').forEach((instruction) => {
      if (['R', 'L'].includes(instruction)) return this.turn(instruction);
      this.advance();
    });
  }

  turn(turn: string) {
    const LEFT_TURNS: Turns = {
      north: 'west',
      east: 'north',
      south: 'east',
      west: 'south',
    };

    const RIGHT_TURNS: Turns = {
      north: 'east',
      east: 'south',
      south: 'west',
      west: 'north',
    };

    this.facing =
      turn === 'R' ? RIGHT_TURNS[this.facing] : LEFT_TURNS[this.facing];
  }

  advance() {
    const STEPS = {
      north: () => ++this.position[1],
      east: () => ++this.position[0],
      south: () => --this.position[1],
      west: () => --this.position[0],
    };

    STEPS[this.facing]();
  }
}
