// 520. Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // All letters are capitals or All letters are not capital
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  } else if (word === word[0] + word.substring(1).toLowerCase()) {
    // Only first letter is capital
    return true;
  } else {
    return false;
  }
};
