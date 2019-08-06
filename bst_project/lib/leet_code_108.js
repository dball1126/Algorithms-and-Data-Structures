// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const sortedArrayToBST = (nums) => {
    if(!nums.length) return null;
    let mid = Math.floor(nums.length / 2)
      let root = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid)
    let right = nums.slice(mid +1)

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    
    return root;
}
console.log (sortedArrayToBST([-10,-3, 0,5,9]))