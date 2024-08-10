// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let set = new Set();

  // if(s.length==1){
  //     return true;
  // }
  // for (let char of s) {

  //     if (set.has(char)) {

  //         set.clear();
  //         set.add(char);
  //         currentLength = 1;
  //     } else {
  //         set.add(char);
  //         currentLength++;
  //     }

  //      if (currentLength > maxLength) {
  //             maxLength = currentLength;
  //         }

  // }

  // return maxLength;

  // Sliding window
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Tried Solving on own but failed on test cases. then through video too. failed due to order of left++.

// Time Complexity : O(n)
// Space Complexity : O(n)
