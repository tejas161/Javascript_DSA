/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    result += word1[i++];
    result += word2[j++];
  }

  if (i < word1.length) {
    result += word1.slice(i);
  }

  if (j < word2.length) {
    result += word2.slice(i);
  }

  return result;
};

console.log(mergeAlternately("abcdef", "pqr"));
