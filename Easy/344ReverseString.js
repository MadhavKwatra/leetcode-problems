/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     for(let i = 0;i<s.length/2;i++){
//         let temp;
//         temp = s[i];
//         s[i] = s[s.length-1-i]
//         s[s.length-1-i]=temp;
//     }
//     return ;
// };

// A better approach two poionter
var reverseString = function (s) {
  let [left, right] = [0, s.length - 1];
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return;
};
