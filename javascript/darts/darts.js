/** Returns the score for a dart throw given its x, y coordinates. */
export const score = (x = 0, y = 0) => {
  let distFromZero = Math.hypot(x, y);

  switch (true) {
    case distFromZero <= 1:
      return 10;
    case distFromZero <= 5:
      return 5;
    case distFromZero <= 10:
      return 1;
    default:
      return 0;
  }
};
