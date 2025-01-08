type Item = {
  weight: number;
  value: number;
};

export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number;
  items: Item[];
}): number {
  let knapsack = Array(maximumWeight + 1).fill(0);

  for (let item of items) {
    for (let capacity of Object.keys(knapsack).reverse()) {
      let c = +capacity;
      let previousValue = knapsack[c];

      if (item.weight <= c) {
        let remainderValue = knapsack[c - item.weight];
        let currentValue = item.value + remainderValue;

        knapsack[c] = Math.max(currentValue, previousValue);
      } else {
        knapsack[c] = previousValue;
      }
    }
  }

  return knapsack.at(-1);
}
