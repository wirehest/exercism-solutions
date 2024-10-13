/** Returns whether a word or phrase is an isogram. */
export const isIsogram = (str) => {
  const strLow = [...str.toLowerCase()].filter((x) => x !== ' ' && x !== '-');
  console.log(strLow, [...new Set(strLow)]);
  return [...new Set(strLow)].length === strLow.length ? true : false;
};
