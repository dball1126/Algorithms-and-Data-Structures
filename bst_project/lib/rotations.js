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
        leftLeftRotation(root)

}

 let node = new TreeNode(20);
    let node15 = new TreeNode(15);
    let node25 = new TreeNode(25);
    let node10 = new TreeNode(10);
    let node14 = new TreeNode(14);
    node15.parent = node;
    node25.parent = node;
    node10.parent = node15
    node14.parent = node10;

    node.left = node15;
    node.right = node25;
    node.left.left = node10;
    node.left.left.right = node14;

    node.left.side = 'left';
    node.right.side = 'right';
    node.left.left.side = 'left';
    node.left.left.right.side = 'left';

    console.log(leftRightRotation(node10))

    console.log(node)

module.exports = {
    leftLeftRotation,
    rightRightRotation,
    leftRightRotation
}