/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let map = new Map();
  totalStonesThatAreJewels = 0;
  for (let ch of jewels) {
    map.set(ch, 0);
  }

  for (let ch of stones) {
    let value = map.get(ch);
    if (value === 0 || value) totalStonesThatAreJewels += value + 1;
  }

  return totalStonesThatAreJewels;
};
