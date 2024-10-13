/** Returns the cheapest discounted price. */
export const cost = (books) => {
  const PRICE = 800;
  const DISCOUNT = {
    1: 1.0,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  };

  let collections = [];
  while (books.length > 0) {
    collections.push(new Set(books).size);
    for (let book of new Set(books)) {
      books.splice(books.indexOf(book), 1);
    }
  }

  while (collections.includes(3) && collections.includes(5)) {
    [3, 5].forEach((x) => collections.splice(collections.indexOf(x), 1));
    collections.push(4, 4);
  }

  return collections.reduce((acc, x) => acc + x * PRICE * DISCOUNT[x], 0);
};
