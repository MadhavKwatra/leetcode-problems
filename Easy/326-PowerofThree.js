/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 1 || n === 3) return true;
  else if (n === 0 || n % 3 != 0) return false;
  n = n / 3;
  return isPowerOfThree(n);
};

// Time complexity must be O(log3N)
