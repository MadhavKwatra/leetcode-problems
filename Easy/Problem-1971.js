// 1971. Find if Path Exists in Graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// var validPath = function (n, edges, source, destination) {
//     if (n === 1) return true;

//     let visited = new Array(n).fill(false);
//     visited[source] = true;
//     let flag = true;
//     while (flag) {

//         flag = false;
//         for (let edge of edges) {
//             // console.log("edge ",edge[0],edge[1], visited)
//             if (visited[edge[0]] !==visited[edge[1]]) {
//                 visited[edge[0]]=true
//                 visited[edge[1]] = true
//                 flag = true;
//             }

//             if(visited[destination]){
//                 console.log("returned")
//             return true;

//             }
//             console.log("For END")
//         }
//         console.log("for outside end")

//     }
//     return false;

// };

// After watching Ayushi Sharma Solution
var validPath = function (n, edges, source, destination) {
  // const adjacencyList = new Array(n).fill([]);
  // WHy this is not working

  const adjacencyList = {};

  for (const edge of edges) {
    const [from, to] = edge;
    if (!(from in adjacencyList)) adjacencyList[from] = [];
    if (!(to in adjacencyList)) adjacencyList[to] = [];
    adjacencyList[from].push(to);
    adjacencyList[to].push(from);
  }

  const visited = new Array(n).fill(0);
  console.log(adjacencyList, "Adjacency list");
  return dfs(adjacencyList, visited, source, destination);
};

const dfs = (graph, visited, src, dest) => {
  if (src == dest) return true;

  if (visited[src]) return false;

  visited[src] = 1;
  for (let i = 0; i < graph[src].length; i++) {
    if (dfs(graph, visited, graph[src][i], dest)) {
      return true;
    }
  }

  return false;
};
