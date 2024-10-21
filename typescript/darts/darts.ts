export function score(x: number, y: number): number {
  let distanceFromCenter = Math.hypot(x, y);
  switch (true) {
    case distanceFromCenter <= 1:
      return 10;
    case distanceFromCenter <= 5:
      return 5;
    case distanceFromCenter <= 10:
      return 1;
    default:
      return 0;
  }
}
