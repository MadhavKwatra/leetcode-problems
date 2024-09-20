/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1) return true;

  let indegreeMap = new Map();
  let outdegreeMap = new Map();

  for (t of trust) {
    const [from, to] = t;
    const indegreeCount = indegreeMap.get(to);
    const outdegreeCount = outdegreeMap.get(to);
    if (!indegreeCount) indegreeMap.set(to, 1);
    else indegreeMap.set(to, indegreeCount + 1);

    if (!outdegreeCount) outdegreeMap.set(from, 1);
    else outdegreeMap.set(from, outdegreeCount + 1);
  }
  for (const [key, value] of indegreeMap) {
    if (value === n - 1 && !outdegreeMap.get(key)) return key;
  }
  return -1;
};

// Theres a O(n ) solution that uses array of size n+1
// outdegree --, and indegree++ then return node which have n-1 value
