const { TreeNode } = require('./tree_node.js');


function inOrderArray(root) {
  if (!root) return [];
  let arr = [];
  arr.push(...inOrderArray(root.left), root.val, ...inOrderArray(root.right));
  return arr;
}
// console.log(inOrderArray([4 ,2 ,5 ,1, 3]))
function postOrderArray(root) {
  if (!root) return [];
  let arr = [];
  arr.push(...postOrderArray(root.left), ...postOrderArray(root.right), root.val);
  return arr;
}

function preOrderArray(root) {
  if (!root) return [];
  let arr = [];
  arr.push(root.val, ...preOrderArray(root.left), ...preOrderArray(root.right));
  return arr;
}


module.exports = {
    inOrderArray,
    postOrderArray
};