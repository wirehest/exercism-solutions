/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const zas = { Margherita: 7, Caprese: 9, Formaggio: 10 };
  const adds = { ExtraSauce: 1, ExtraToppings: 2 };

  function extrasPrice(extras, optionsPrice = 0) {
    if (!extras.length) {
      return optionsPrice;
    } else {
      optionsPrice += adds[extras.pop()];
      return extrasPrice(extras, optionsPrice);
    }
  }
  return zas[pizza] + extrasPrice(extras);
}


/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const zas = { Margherita: 7, Caprese: 9, Formaggio: 10 };
  const adds = { ExtraSauce: 1, ExtraToppings: 2 };
  let total = 0;
  
  for (let order of pizzaOrders) {
    total += zas[order.pizza] + order.extras.reduce((a, c) => a + adds[c], 0);
  }
  return total;
}

