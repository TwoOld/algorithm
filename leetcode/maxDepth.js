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
var maxDepth = function (root, max = 1) {
    if (root === null) return 0
    if (!root.left && !root.right) return max
    let left = 0,
        right = 0
    if (root.left) {
        left = maxDepth(root.left, max + 1)
    }
    if (root.right) {
        right = maxDepth(root.right, max + 1)
    }
    return Math.max(left, right)
};