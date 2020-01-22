function breadthFirstArray(root) {
    let queue = [ root ];
    let order = [];

    while (queue.length) {
        let node = queue.shift();
        order.push(node.val);

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return order;
}

module.exports = {
    breadthFirstArray
};



// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;