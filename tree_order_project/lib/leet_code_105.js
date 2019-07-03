// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length < 1 && inorder.length < 1) return null;
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let midIdx = inorder.indexOf(rootVal);
    let leftinorder = inorder.slice(0, midIdx);
    let rightinorder = inorder.slice(midIdx + 1);
    
    let leftPreorder = preorder.filter((val) => leftinorder.includes(val));
    let rightPreorder = preorder.filter((val) => rightinorder.includes(val))

    let leftTree = buildTree(leftPreorder, leftinorder);
    let rightTree = buildTree(rightPreorder, rightinorder)
    
    root.left = leftTree;
    root.right = rightTree;

    return root
}
