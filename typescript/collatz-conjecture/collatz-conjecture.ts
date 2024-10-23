export function steps(count: number): number {
  if (count <= 0 || count % 1) {
    throw new Error('Only positive integers are allowed');
  }

  let steps = 0;
  while (count > 1) {
    if (!(count % 2)) count /= 2;
    else count = 3 * count + 1;
    steps++;
  }

  return steps;
}
