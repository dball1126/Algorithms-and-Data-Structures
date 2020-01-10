function nodeHeight(root){
    if (!root) return -1;
    let leftSide = nodeHeight(root.left) + 1;
    let rightSide = nodeHeight(root.right) + 1;
    return Math.max(leftSide, rightSide);
}

module.exports = {
    nodeHeight
}