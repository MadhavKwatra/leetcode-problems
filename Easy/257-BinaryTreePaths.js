/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const arrayOfPaths = [];
  dfs(root, arrayOfPaths, "");

  return arrayOfPaths;
};

const dfs = (node, array, path) => {
  if (node === null) {
    return;
  }
  if (!node.left && !node.right) {
    path += node.val;
    array.push(path);
  } else {
    path += node.val + "->";
  }
  console.log(node.val, path, array);
  dfs(node.left, array, path);
  dfs(node.right, array, path);
};
