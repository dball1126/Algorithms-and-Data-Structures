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


module.exports = {
    leftLeftRotation,
    rightRightRotation,
    leftRightRotation,
    rightLeftRotation
}