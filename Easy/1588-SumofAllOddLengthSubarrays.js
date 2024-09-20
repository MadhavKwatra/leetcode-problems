// 1588. Sum of All Odd Length Subarrays
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let tempArray = [];
  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < arr.length - i + 1; j++)
        tempArray.push(...arr.slice(j, i + j));
    }
  }
  return tempArray.reduce((sum, value) => sum + value, 0);
};
