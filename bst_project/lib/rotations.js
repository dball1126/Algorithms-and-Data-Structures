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

function leftRightRotation(node) {
    if (!node) return null;
    
    let pivot = node;
    let root = node.parent;
    let changeNode = pivot.right;
        root.left = changeNode;
        
        changeNode.parent = root;
        changeNode.left = pivot;
        changeNode.side = 'left';

        pivot.parent = changeNode;
        pivot.right = null;
        leftLeftRotation(root) // We pass in the root here.

}

function rightLeftRotation(node) {
    if (!node) return null;
    
    let pivot = node;
    let root = node.parent;
    let changeNode = pivot.left;
        root.right = changeNode;
        
        changeNode.parent = root;
        changeNode.right = pivot;
        changeNode.side = 'right';

        pivot.parent = changeNode;
        pivot.left = null;
        rightRightRotation(root) // We pass in the root here.

}
let node = new TreeNode(20);
    let node15 = new TreeNode(15);
    let node25 = new TreeNode(25);
    let node30 = new TreeNode(30);
    let node27 = new TreeNode(27);
    node15.parent = node;
    node25.parent = node;
    node30.parent = node25
    node27.parent = node30;

    node.right = node25;
    node.left = node15;
    node.right.right = node30;
    node.right.right.left = node27;

    node.left.side = 'left';
    node.right.side = 'right';
    node.right.right.side = 'right';
    node.right.right.left.side = 'left';


    rightLeftRotation(node30)
    console.log(node)


module.exports = {
    leftLeftRotation,
    rightRightRotation,
    leftRightRotation,
    rightLeftRotation
}