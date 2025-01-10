export function knapsack(maximumWeight, items) {
  let contents = Array(maximumWeight + 1).fill(0);

  for (let item of items) {
    for (let capacity of Object.keys(contents).reverse()) {
      let c = +capacity;
      let previousValue = contents[c];

      if (item.weight <= c) {
        let remainderValue = contents[c - item.weight];
        let currentValue = item.value + remainderValue;

        contents[c] = Math.max(currentValue, previousValue);
      } else {
        contents[c] = previousValue;
      }
    }
  }

  return contents.at(-1);
}

