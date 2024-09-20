/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return fibonacciSum(n);
};

function fibonacciSum(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return fibonacciSum(n - 1) + fibonacciSum(n - 2);
}
// Complexity O(2^N)
