class TreeNode {
    constructor(val) {
       this.val = val;
       this.left = null;
       this.right = null;
    }
}


class BST {
   constructor(){
      this.root = null
   }
   insert(target, root = this.root){
        if (!this.root) {
            this.root = new TreeNode(target)
            return
        }
        if (target < root.val) {
            if (!root.left) {
                root.left = new TreeNode(target)
            } else {
                this.insert(target, root.left)
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(target)
            } else {
                this.insert(target, root.right)
            }
        }
        return
       
    }

    searchRecur(val, root = this.root){
      if (!root) return false;
      if (root.val === val) {
          return true;
      } else if (val < root.val) {
         return this.searchRecur(val, root.left)
      } else if (val > root.val){
         return this.searchRecur(val, root.right)
      }
        return false;
    }

    searchIter(val) {
        if (!this.root) return false;
        let root = this.root;
        while (root) {
            if (root.val === val) {
                return true;
            } else if (val < root.val) {
                if (!root.left) return false;
                if (root.left.val === val) return true;
                root = root.left;
            } else {
                if (!root.right) return false;
                if (root.right.val === val) return true;
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