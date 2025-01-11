export class QueenAttack {
  static defaultWhite = { row: 7, column: 3 };
  static defaultBlack = { row: 0, column: 3 };

  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    blackRow ??= QueenAttack.defaultBlack.row;
    blackColumn ??= QueenAttack.defaultBlack.column;
    whiteRow ??= QueenAttack.defaultWhite.row;
    whiteColumn ??= QueenAttack.defaultWhite.column;

    if (
      this.positionInvalid([blackRow, blackColumn]) ||
      this.positionInvalid([whiteRow, whiteColumn])
    ) {
      throw new Error('Queen must be placed on the board');
    }

    if (this.queensOverlap([whiteRow, whiteColumn], [blackRow, blackColumn])) {
      throw new Error('Queens cannot share the same space');
    }

    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
  }

  toString() {
    let row = Array(8).fill('_');
    let board = Array(8)
      .fill()
      .map(() => [...row]);

    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';

    return board.map((row) => row.join(' ')).join('\n');
  }

  positionInvalid([row, column]) {
    return row < 0 || row > 7 || column < 0 || column > 7;
  }

  queensOverlap([whiteRow, whiteColumn], [blackRow, blackColumn]) {
    return whiteRow === blackRow && whiteColumn === blackColumn;
  }

  getMoves([row, column]) {
    const DIRECTIONS = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    let accessible = [];

    for (let direction of DIRECTIONS) {
      let nextRow = row;
      let nextColumn = column;

      while (true) {
        nextRow += direction[0];
        nextColumn += direction[1];

        if (this.positionInvalid([nextRow, nextColumn])) break;
        accessible.push(JSON.stringify([nextRow, nextColumn]));
      }
    }

    return accessible;
  }

  get canAttack() {
    let whiteMoves = this.getMoves([this.white[0], this.white[1]]);
    let blackPosition = JSON.stringify([this.black[0], this.black[1]]);

    return whiteMoves.includes(blackPosition);
  }
}
