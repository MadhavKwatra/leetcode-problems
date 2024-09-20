// 2824. Count Pairs Whose Sum is Less than Target
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var countPairs = function (nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     let noOfPairs = 0;

//     while (l < nums.length - 1) {

//         while (l < r) {
//             if (nums[l] + nums[r] < target)
//                 noOfPairs++;

//             r--;
//         }
//         l++
//         r=nums.length-1;
//     }

//     return noOfPairs;

// };
// Time Complexity O(N*N)

// Implemented after watching solutions
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;
  let noOfPairs = 0;

  while (l < r) {
    if (nums[l] + nums[r] < target) {
      noOfPairs += r - l;
      l++;
    } else r--;
  }

  return noOfPairs;
};
