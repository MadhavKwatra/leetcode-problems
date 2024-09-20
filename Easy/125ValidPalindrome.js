/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let string = s.replace(/[^a-zA-Z0-9]/g, "");
  string = string.toLowerCase();
  console.log(string);

  let stack = [];
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) return false;

    i++;
    j--;
  }

  return true;
};
