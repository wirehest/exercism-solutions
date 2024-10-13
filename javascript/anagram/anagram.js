'use strict';

/** Returns anagrams of the target word from the list of candidate words. */
export const findAnagrams = (target, candidates) => {
  function sortChars(word) {
    return [...word.toLowerCase()].sort().join('');
  }

  const sortedTarget = sortChars(target);
  const filteredCandidates = candidates.filter(
    (x) => x.toLowerCase() !== target.toLowerCase()
  );
  let anagrams = [];

  for (let word of filteredCandidates) {
    if (sortChars(word) === sortedTarget) anagrams.push(word);
  }
  return anagrams;
};
