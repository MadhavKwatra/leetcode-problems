/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
  // Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    // V is no. of Edges, adj is adjacencyList
    const traversalList = [];
    const visitedArray = new Array(V - 1).fill(0);

    function dfs(node, traversalList, visitedArray, adj) {
      visitedArray[node] = 1;
      traversalList.push(node);

      for (let connectedNode of adj[node]) {
        if (!visitedArray[connectedNode]) {
          dfs(connectedNode, traversalList, visitedArray, adj);
        }
      }
    }
    dfs(0, traversalList, visitedArray, adj);
    return traversalList;
  }
}

// Time Complexity O(V+E)
// Space Complexity O(V)
