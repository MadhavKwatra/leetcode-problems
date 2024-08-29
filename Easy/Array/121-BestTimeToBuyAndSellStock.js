// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let maxProfit = 0;
//     let minPrice = prices[0];

//     for (let i = 0; i < prices.length; i++) {
//         if (minPrice > prices[i]) {
//             minPrice = prices[i];
//         }
//         let tempProfit = prices[i] - minPrice
//         if (tempProfit > maxProfit) {
//             maxProfit = tempProfit;
//         }
//     }

//     return maxProfit;
// };

// Another SOlution
var maxProfit = function (prices) {
  let left = 0; //Buy
  let right = 1; //Sell
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

// Time Complexity = O(n)
// Space Complexity = O(1) as only primitive values are stored

// Took help from chat gpt, coded on my own. THen checked solutions and again coded one.
// It uses Sliding window approach.
