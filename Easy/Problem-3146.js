// 3146. Permutation Difference between Two Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  const pDiff = new Map();
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    pDiff.set(s[i], i);
  }

  for (let i = 0; i < t.length; i++) {
    // pDiff.set(t[i],Math.abs(pDiff.get(t[i])-i))
    sum += Math.abs(pDiff.get(t[i]) - i);
  }

  return sum;
};
