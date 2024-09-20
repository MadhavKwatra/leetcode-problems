// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let found;
  nums.every((num, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (num + nums[i] === target) {
        found = [index, i];
        break;
      }
    }
    if (found) return false;

    return true;
  });
  return found;
};
