/** Adds mine counts to a Minesweeper board. */
export const annotate = (input) => {
  /** Gets the adjacent cells for a given cell. */
  function getAdjacents(x, y) {
    return [
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
    ];
  }

  /** Returns the mine count. Formats zeroes as ' '. */
  function getMines(y, x) {
    let mines = getAdjacents(y, x).reduce(
      (acc, v) => ((input[v[0]]?.[v[1]] ?? 0) === '*' ? ++acc : acc),
      0
    );
    return !mines ? ' ' : mines + '';
  }

  let revealed = [...input].map((y) => [...y]);
  input.forEach((_, y) =>
    [...input[y]].forEach((_, x) => {
      revealed[y][x] = input[y][x] === ' ' ? getMines(y, x) : '*';
    })
  );
  revealed = revealed.map((y) => y.reduce((acc, v) => acc + v, ''));

  return revealed;
};
