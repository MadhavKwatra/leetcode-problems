// 207. Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjacencyListMap = new Map();
  const visitedSet = new Set();
  for (let [a, b] of prerequisites) {
    const existValue = adjacencyListMap.get(a);
    if (existValue) {
      existValue.push(b);
      adjacencyListMap.set(a, existValue);
    } else adjacencyListMap.set(a, [b]);
  }

  const dfs = (node) => {
    if (visitedSet.has(node)) {
      return false;
    }
    if (!adjacencyListMap.get(node) || adjacencyListMap.get(node) == []) {
      return true;
    }

    visitedSet.add(node);

    const toTraverse = adjacencyListMap.get(node);
    for (let traverse of toTraverse) {
      if (!dfs(traverse)) return false;
    }
    // Removing so we can revisit from other nodes later on.
    // Also a cycle is from that node to itself and that will be over in the above loop
    visitedSet.delete(node);
    adjacencyListMap.set(node, []);
    return true;
  };

  for (let i = 0; i < numCourses - 1; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};

// Time Complexity O(n+e) e is edges in prerequisites
// Space Complexity O(v+e)

// Watched neetcode's solution then implemented 😭😢
