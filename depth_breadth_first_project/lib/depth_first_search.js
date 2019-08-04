function depthFirstSearch(root, targetVal) {
    
    let stack = [ root ];

    while(stack.length) {
        let current = stack.pop();
        if (current.val === targetVal) return current;
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return null;
}


module.exports = {
    depthFirstSearch
};