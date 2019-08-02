class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
   }
   insert(val, root = this.root){
        let node = new TreeNode(val);
        if (!root) return this.root = node;
        if (root.val > val) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insert(val, root.right)
            }
        }
        return this;
    }

    searchRecur(val, root = this.root){
        if (!root) return false;
        if (root.val === val) return true;
        if (root.val > val) {
            return this.searchRecur(val, root.left);
        } else {
            return this.searchRecur(val, root.right);
        }
       
    }

    searchIter(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (current.val === val) return true;
            if (current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};