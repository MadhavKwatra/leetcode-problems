/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  const arrayOfWords = s.split(" ");
  const lastWord = arrayOfWords.pop();
  return lastWord.length;
};
