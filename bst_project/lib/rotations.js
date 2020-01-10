class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
        this.parent = null;
        this.side = null;
    }
}

function leftLeftRotation(node) {
    if (!node) return null;

    let oldParent = node;
    let newParent = node.left;
    newParent.parent = oldParent.parent;

    node.parent.left = newParent;
    newParent.right = oldParent;
    oldParent.parent = newParent
    oldParent.side = 'right';
    oldParent.left = null;
}

let node = new TreeNode(20);
let node15 = new TreeNode(15);
let node25 = new TreeNode(25);
let node10 = new TreeNode(10);
let node7 = new TreeNode(7);
node15.parent = node;
node25.parent = node;
node10.parent = node15
node7.parent = node10;

node.left = node15;
node.right = node25;
node.left.left = node10;
node.left.left.left = node7;

node.left.side = 'left';
node.right.side = 'right';
node.left.left.side = 'left';
node.left.left.left.side = 'left';

console.log(leftLeftRotation(node15))
console.log(node)


module.exports = {
    leftLeftRotation
}