/**
 * @param {number[][]} edges
 * @return {number}
 */
// var findCenter = function (edges) {
//     let map = new Map();
//     let highestKey = null
//     let highestCount = 0;
//     for (let edge of edges) {
//         for (let node of edge) {
//             if (map.get(node)) {
//                 const count = map.get(node) + 1
//                 map.set(node, count)
//                 if (count > highestCount) {
//                     highestCount = count;
//                     highestKey = node
//                     break;
//                 }
//             } else
//                 map.set(node, 1);
//         }

//         if(highestKey)
//         break;
//     }

//     return highestKey
// };

// Time Complexity O(3), Space

var findCenter = function (edges) {
  return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]
    ? edges[0][0]
    : edges[0][1];
};
