class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


class BST {
   constructor(){
     this.root = null;
   }

   insert(val, root = this.root){
        let node = new TreeNode(val);
        if (!this.root) {
           return this.root = node;
        }
        if (val < root.val) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insert(val, root.right);
            }
        }
    }

    searchRecur(val, root = this.root){
        if (!root) return false;
        if (val == root.val) return true;
        if (val < root.val) {
           return this.searchRecur(val, root.left);
        } else {
           return this.searchRecur(val, root.right);
        }
    }

    searchIter(val) {
        let root = this.root;
        while (root) {
            if (root.val == val) return true;
            if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    }

}

module.exports = {
    TreeNode,
    BST
};