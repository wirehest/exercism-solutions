/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  return timer === 0
    ? 'Lasagna is done.'
    : Number.isFinite(timer)
    ? 'Not done, please wait.'
    : 'You forgot to set the timer.';
}

export function preparationTime(layers, avePrepTime = 2) {
  return layers.length * avePrepTime;
}

export function quantities(layers) {
  const perLayer = { noodles: 50, sauce: 0.2 };
  let noodsNSauce = {};

  for (let layer of ['noodles', 'sauce']) {
    noodsNSauce[layer] =
      layers.filter((x) => x === layer).length * perLayer[layer];
  }
  return noodsNSauce;
}

export function addSecretIngredient(friendsRecipe, myRecipe) {
  myRecipe.push(friendsRecipe.at(-1));
}

export function scaleRecipe(recipe, portions) {
  const scale = portions / 2;
  let scaledRecipe = {};

  for (let [ingredient, amount] of Object.entries(recipe)) {
    scaledRecipe[ingredient] = amount * scale;
  }

  return scaledRecipe;
}