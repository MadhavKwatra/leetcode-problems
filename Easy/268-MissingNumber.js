/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = 0;
  let sumUsingFormula = (n * (n + 1)) / 2;
  return sumUsingFormula - nums.reduce((sum, i) => sum + i, 0);
};
// A O(N) solution using the sum of n natural numbers formula thats crazy.
