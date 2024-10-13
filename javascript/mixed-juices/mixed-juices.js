// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3.0;
    case 'All or Nothing':
      return 5.0;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let tally = 0;
  while (tally < wedgesNeeded && count < limes.length) {
    switch (limes[count]) {
      case 'small':
        tally += 6;
        break;
      case 'medium':
        tally += 8;
        break;
      case 'large':
        tally += 10;
        break;
      default:
        break;
    }
    count++;
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  orders.reverse();
  while (timeLeft > 0) {
    switch (orders.pop()) {
    case 'Pure Strawberry Joy':
      timeLeft -= 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      timeLeft -= 1.5;
      break;
    case 'Tropical Island':
      timeLeft -= 3.0;
      break;
    case 'All or Nothing':
      timeLeft -= 5.0;
      break;
    default:
      timeLeft -= 2.5;
      break;
    }
  }
  return orders.reverse();
}
