/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
  // Function to return Breadth First Traversal of given graph.
  bfsOfGraph(V, adj) {
    // V is no. of Edges, adj is adjacencyList
    const visitedArray = new Array(V).fill(0);
    const queue = [];
    const bfs = [];
    queue.push("0");
    visitedArray[0] = 1;
    while (queue.length != 0) {
      const node = queue.shift();
      bfs.push(node);

      for (let connectedNode of adj[node]) {
        if (!visitedArray[connectedNode]) {
          visitedArray[connectedNode] = 1;
          queue.push(connectedNode);
        }
      }
    }
    return bfs;
  }
}

// Time Complexity O(V+E)
// Space Complexity O(V)
