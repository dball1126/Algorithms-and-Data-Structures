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

function rightRightRotation(node) {
    if (!node) return null;

    let oldParent = node;
    let newParent = node.right;
    newParent.parent = oldParent.parent;

    node.parent.right = newParent;
    newParent.left = oldParent;
    oldParent.parent = newParent
    oldParent.side = 'left';
    oldParent.right = null;
}

let node = new TreeNode(20);
let node15 = new TreeNode(15);
let node25 = new TreeNode(25);
let node30 = new TreeNode(30);
let node32 = new TreeNode(32);
node15.parent = node;
node25.parent = node;
node30.parent = node25
node32.parent = node30;

node.left = node15;
node.right = node25;
node.right.right = node30;
node.right.right.right = node32;

node.right.side = 'right';
node.left.side = 'left';
node.right.right.side = 'right';
node.right.right.right.side = 'right';
rightRightRotation(node25)
console.log(node)


module.exports = {
    leftLeftRotation,
    rightRightRotation
}