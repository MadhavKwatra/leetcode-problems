/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  // for (let i = 0; i < word.length; i++) {
  //     if (word[i] === ch) {
  //         r = i;
  //         break;
  //     }
  // }
  let r = word.indexOf(ch);
  console.log("R is ", r);
  if (r === -1) return word;

  const reversedPrefix = word
    .substr(0, r + 1)
    .split("")
    .reverse()
    .join("");
  return reversedPrefix + word.substr(r + 1);
};
