// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    const dpArray = new Array(n + 1).fill(-1)
    const noOfWays = (n) => {
        if(n<0)
        return 0;
        if (n === 0)
            return 1

        if (n === 1)
            return 1;

        if (dpArray[n] != -1)
            return dpArray[n];


        let left = noOfWays(n - 1)
        let right = noOfWays(n - 2)
        return dpArray[n] = left + right;
    }
    return noOfWays(n)
};


// Didn't thought much about it , was able to do easily as have watched striver's video before it.

// Time Complexity = O(n)
// Space COmplexity = O(n) 