'use strict';

/** Returns a Date object one gigasecond after input date.  */
export const gigasecond = (date) => {
  const GIGAMILLISECONDS = 1e12;
  return new Date(date.getTime() + GIGAMILLISECONDS);
};
