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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  let maxRight = maxDepth(root.right);
  let maxLeft = maxDepth(root.left);
  return Math.max(maxRight, maxLeft) + 1;
};

const inOrder = (root) => {
  if (root === null) return;
  inOrder(root.left);
  console.log("val->", root.val);
  inOrder(root.right);
};
