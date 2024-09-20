/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  // const result = listOfTargetIndeces(nums,0,nums.length-1,target);
  // console.log(result);
  // return result;
  let [low, high] = [0, nums.length - 1];
  let indeces = [];
  // AGain couldn't do it through binary search
  // while (low <= high) {

  //     let mid = Math.floor((low + high) / 2)
  //     if (nums[mid] === target) {
  //         indeces.push(mid)
  //         if (nums[mid + 1] === target) {
  //             low = mid + 1;
  //         } else {
  //             high = mid - 1;
  //         }
  //     } else if (nums[mid] > target)
  //         high = mid - 1;
  //     else
  //         low = mid + 1;
  // }
  // return indeces.sort((a,b)=>a-b);

  // Doing with bruteforce
  nums.forEach((val, index) => {
    if (val === target) indeces.push(index);
  });
  return indeces;
};

// Thought of doing recursively but couldn't
// let indeces=[];
// function listOfTargetIndeces(nums,low,high,target){
//     let mid = Math.floor((low+high)/2)
//     console.log(mid,"MiD    ",indeces);
//     if(low>high)
//     return indeces;
//     if(nums[mid]===target)
//         {indeces.unshift(mid)
//         listOfTargetIndeces(nums,low,mid-1,target)}
//         else if (nums[mid]>target)
//         listOfTargetIndeces(nums,low,mid-1,target)
//         else
//         listOfTargetIndeces(nums,mid+1,high,target)

// }
