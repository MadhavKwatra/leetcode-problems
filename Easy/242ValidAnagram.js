/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     const firstStringSorted = s.split("").sort().join("");
//     const secondStringSorted = t.split("").sort().join("");
//     return firstStringSorted === secondStringSorted
// };

// Better solution
var isAnagram = function (s, t) {
  let freq = new Array(26).fill(0);
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] != 0) return false;
  }

  return true;
};
