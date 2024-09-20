/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // Recursion Solution
  // if (n === 1)
  //     return true
  // else if (n % 2 || n === 0)
  //     return false

  // n = n / 2;
  // return isPowerOfTwo(n);
  // COmplexity is O(logN)

  // Bit manipulation

  return n > 0 && (n & (n - 1)) === 0;
};
