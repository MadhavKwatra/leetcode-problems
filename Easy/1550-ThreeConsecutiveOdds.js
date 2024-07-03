// 1550. Three Consecutive Odds

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    if (arr.length < 3) {
        return false
    }
    let haveThreeConsecutiveOdds = false;
    for (let i = 0; i < arr.length - 2; i++) {
        haveThreeConsecutiveOdds = arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2

        if (haveThreeConsecutiveOdds) {
            haveThreeConsecutiveOdds = true;
            break;
        }
    }

    return haveThreeConsecutiveOdds;
};

// Time Complexity: O(n)
// Space Complexity: O(1)


// Saw some solutions with count where we reset count if encounter even.
// Could use that as an alternative