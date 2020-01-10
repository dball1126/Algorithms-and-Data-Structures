class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function nodeHeight(root){
    if (!root) return -1;
    let leftSide = nodeHeight(root.left) + 1;
    let rightSide = nodeHeight(root.right) + 1;
    return Math.max(leftSide, rightSide);
}

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.right.right = new TreeNode(4);
node.left.left = new TreeNode(5);
node.left.left.left = new TreeNode(6);

console.log(nodeHeight())


module.exports = {
    nodeHeight
}