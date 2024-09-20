/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let containsDuplicate = false;
  let map = new Map();
  for (let num of nums) {
    if (map.get(num)) {
      containsDuplicate = true;
      break;
    } else map.set(num, 1);
  }
  return containsDuplicate;
};

//O(N)
