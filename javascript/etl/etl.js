'use strict';

/** Converts an object with one-to-many mapping to one-to-one mappings. */
export const transform = (oldScoreObj) => {
  let newScoreObj = {};
  for (let [key, values] of Object.entries(oldScoreObj)) {
    [...values].forEach((v) => (newScoreObj[v.toLowerCase()] = +key));
  }
  return newScoreObj;
};
