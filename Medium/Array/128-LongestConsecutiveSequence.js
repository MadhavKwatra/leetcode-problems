// 128. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let maxLength = 0;
    const set = new Set(nums);

    // Looping through set to decrease run time 2000 to 90ms
    for (let num of set) {

        // Check if num is start of a sequence.
        if (!set.has(num - 1)) {
            let currentLength = 1;
            while (set.has(num + currentLength)) {
                currentLength++;
            }

            maxLength = Math.max(currentLength, maxLength);
        }
    }

    return maxLength;
};

// Couldn't think of the solution watched some shorts, videos then could 

// Time Complexity - O(n)
// Inner loop doesn't come under as we only do it for the longest. other wise just if check for start of sequence is ran
// Worst case is consecutive array , inner loop only rans till n the other breaks after the first time
// Another optimization is remove the next occurence ,i thought
// Space Complexity - O(n)