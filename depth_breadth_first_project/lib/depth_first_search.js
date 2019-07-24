function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    let stack = [ root ];
    while(stack.length){
        let ele = stack.pop();
        if (ele.val === targetVal) return ele; 
        if (ele.right) stack.push(ele.right)
        if (ele.left) stack.push(ele.left);
    }
    return null;
}


module.exports = {
    depthFirstSearch
};