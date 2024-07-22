// 746. Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dpArray = new Array(cost.length + 1).fill(-1);

  const minCost = (cost, n) => {
    if (n < 0) return 0;
    if (n == 0) return cost[0];
    if (n == 1) return cost[1];

    if (dpArray[n] != -1) return dpArray[n];

    return (dpArray[n] =
      cost[n] + Math.min(minCost(cost, n - 1), minCost(cost, n - 2)));
  };

  return Math.min(minCost(cost, n - 1), minCost(cost, n - 2));
};

// Solved first using the hints, then implemented some solution from the solutions as it looked intuitive

// Time Complexity : O(n)
// Space Complexity : O(n)
