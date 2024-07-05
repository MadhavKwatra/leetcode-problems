// 133. Clone Graph

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  let clone = new _Node(node.val);
  const visitedSet = new Set();

  // Map to track the cloned nodes to handle neighbors correctly
  const nodeToClone = {};
  nodeToClone[node.val] = clone;

  function dfs(nodeForDfs, cloneDfs) {
    visitedSet.add(nodeForDfs);
    for (let neighbor of nodeForDfs.neighbors) {
      if (!visitedSet.has(neighbor)) {
        // Create a new clone of the neighbor
        let newNode = new _Node(neighbor.val);
        nodeToClone[neighbor.val] = newNode;
        // Link the clone of the current node to the clone of the neighbor
        cloneDfs.neighbors.push(newNode);
        // Recursively clone the neighbor
        dfs(neighbor, newNode);
      } else {
        // If the neighbor has already been visited, link to the existing clone
        cloneDfs.neighbors.push(nodeToClone[neighbor.val]);
      }
    }
  }

  dfs(node, clone);

  return clone;
};

// Time complexity O(V+E)
// Space Complexity O(V)

// Thought of the solution but couldn't think of some conditions
// Took help from ChatGPT to solve . Graphs are super hard.




// Another solution using Map, looks easy
// Exact like Neetcode's

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;

  const map = new Map();

  function dfs(nodeForDfs) {
    if (map.has(nodeForDfs)) {
      return map.get(nodeForDfs);
    }

    const clonedNode = new _Node(nodeForDfs.val);
    map.set(nodeForDfs, clonedNode);

    for (let neighbor of nodeForDfs.neighbors) {
      clonedNode.neighbors.push(dfs(neighbor));
    }
    return clonedNode;
  }
  const clone = dfs(node);
  return clone;
};
