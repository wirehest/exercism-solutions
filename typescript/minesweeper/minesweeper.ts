type Board = string[];

export function annotate(field: Board): Board {
  let revealed = [...field].map((y) => [...y]);
  field.forEach((_, y) =>
    [...field[y]].forEach((_, x) => {
      revealed[y][x] = field[y][x] === ' ' ? getMines(y, x) : '*';
    }),
  );
  return revealed.map((y) => y.reduce((acc, v) => acc + v, ''));

  /** Gets adjacent squares for a given square. */
  function getAdjacents(x: number, y: number): [number, number][] {
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

  /** Returns mine counts. Formats zeroes as ' '. */
  function getMines(y: number, x: number): string {
    let mines = getAdjacents(y, x).reduce(
      (acc, v) => ((field[v[0]]?.[v[1]] ?? 0) === '*' ? ++acc : acc),
      0,
    );
    return !mines ? ' ' : mines + '';
  }
}
