/**
 * Returns the date given a general description, e.g., "first" Monday, or
 * "last" Tuesday, etc.
 */
export const meetup = (year, mo, desc, day) => {
  const month = mo - 1;
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const oneToFour = ['first', 'second', 'third', 'fourth'];
  const date =
    ((((days.indexOf(day) - new Date(year, month, 1).getDay()) % 7) + 7) % 7) +
    1;

  switch (true) {
    case desc === 'teenth':
      for (let teenth of [13, 14, 15, 16, 17, 18, 19]) {
        if (new Date(year, month, teenth).getDay() === days.indexOf(day)) {
          return new Date(year, month, teenth);
        }
      }
    case desc === 'last':
      if (new Date(year, month, date + 28).getMonth() !== month) {
        return new Date(year, month, date + 21);
      }
      return new Date(year, month, date + 28);
    default:
      return new Date(year, month, date + 7 * oneToFour.indexOf(desc));
  }
};