// const { TreeNode } = require('./tree_node.js');


function inOrderArray(root) {
    if(!root) return [];
    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)]
}
// console.log(inOrderArray([4 ,2 ,5 ,1, 3]))
function postOrderArray(root) {
    if(!root) return [];
    return [...postOrderArray(root.left), ...postOrderArray(root.right), root.val ]
}


module.exports = {
    inOrderArray,
    postOrderArray
};