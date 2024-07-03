// Problem: 50. Pow(x, n)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 1) return x;
  if (n == 0) return 1;

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return n % 2 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};

// Space Complexity : O(1) as i use no additional Variables
// Time Complexity : O(logn) as case decreases by 2

// Solved on my first try, but failed in some test cases due to maximum call stack reached.
//  Had to see others solutions to figure out a better approach.


