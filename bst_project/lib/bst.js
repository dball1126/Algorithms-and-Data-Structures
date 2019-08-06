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
   insert(val, node = this.root){
        let newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            if (node.val > val) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                   return this.insert(val, node.left);
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                   return this.insert(val, node.right);
                }
            }
        }
        return this;
    }

    searchRecur(val, node = this.root){
       if (!node) return false;
       if (node.val === val) return true;
       if (node.val > val) {
           if (node.left) {
               if (node.left.val === val) return true;
               return this.searchRecur(val, node.left);
           } else {
               return false;
           }
       } else {
           if (node.right) {
               if (node.right.val === val) return true;
               return this.searchRecur(val, node.right)
           } else {
               return false;
           }
       }
    }

    searchIter(val) {
       if (!this.root) return false;
       let node = this.root;

       while (node) {
           if (node.val === val) return true;
           if (node.val > val) {
               node = node.left;
           } else {
               node = node.right;
           }
       }
       return false;
    }
}

module.exports = {
    TreeNode,
    BST
};