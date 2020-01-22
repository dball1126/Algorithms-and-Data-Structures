const chai = require('chai');
chai.use(require('chai-spies'));
const { expect, spy } = chai;
const { nodeHeight} = require('../lib/node_height');
const { TreeNode, BST } = require('../lib/bst');
const {leftLeftRotation, rightRightRotation, leftRightRotation} = require('../lib/rotations');

describe('BST', () => {
    describe('#constructor()', () => {
        it ('should initialize the `root` property to null', () => {
            let tree = new BST();
            expect(tree).to.have.property('root');
            expect(tree.root).to.equal(null);
        });
    });

    describe('#insert(val)', () => {
        it ('should insert a TreeNode with the given value into the BST', () => {
            let tree = new BST();
            tree.insert(10);
            tree.insert(5);
            tree.insert(16);
            tree.insert(1);
            tree.insert(7);
            tree.insert(16);
            expect(tree.root.val).to.equal(10);
            expect(tree.root.left.val).to.equal(5);
            expect(tree.root.right.val).to.equal(16);
            expect(tree.root.left.left.val).to.equal(1);
            expect(tree.root.left.right.val).to.equal(7);
            expect(tree.root.right.right.val).to.equal(16);
        });

        context('when the BST is empty', () => {
            it('should correctly insert a TreeNode with the given val as the root', () => {
                let tree = new BST();
                tree.insert(10);
                expect(tree.root).to.be.instanceOf(TreeNode);
                expect(tree.root.val).to.equal(10);
            });
        });
    });

    describe('#searchRecur(val)', () => {
        let tree;

        beforeEach(() => {
            tree = new BST();
            tree.insert(10);
            tree.insert(5);
            tree.insert(16);
            tree.insert(1);
            tree.insert(7);
            tree.insert(16);
        });

        it('should return false if the BST is empty', () => {
            let emptyTree = new BST();
            expect(emptyTree.searchRecur(10)).to.equal(false);
        });

        it('should be recursive', () => {
            spy.on(tree, 'searchRecur');
            tree.searchRecur(7);
            expect(tree.searchRecur).to.have.been.called.above(1);
        });

        context('when the val is contained in the BST', () => {
            it ('should return true', () => {
                expect(tree.searchRecur(10)).to.equal(true);
                expect(tree.searchRecur(7)).to.equal(true);
                expect(tree.searchRecur(16)).to.equal(true);
            });
        });

        context('when the val is not contained in the BST', () => {
            it ('should return false', () => {
                expect(tree.searchRecur(-4)).to.equal(false);
                expect(tree.searchRecur(1.5)).to.equal(false);
                expect(tree.searchRecur(14)).to.equal(false);
            });
        });
    });

    describe('#searchIter(val)', () => {
        let tree;

        beforeEach(() => {
            tree = new BST();
            tree.insert(10);
            tree.insert(5);
            tree.insert(16);
            tree.insert(1);
            tree.insert(7);
            tree.insert(16);
        });

        it('should return false if the BST is empty', () => {
            let emptyTree = new BST();
            expect(emptyTree.searchIter(10)).to.equal(false);
        });

        it('should not be iterative, not recursive', () => {
            spy.on(tree, 'searchIter');
            tree.searchIter(7);
            expect(tree.searchIter).to.have.been.called.once;
        });

        context('when the val is contained in the BST', () => {
            it ('should return true', () => {
                expect(tree.searchIter(10)).to.equal(true);
                expect(tree.searchIter(7)).to.equal(true);
                expect(tree.searchIter(16)).to.equal(true);
            });
        });

        context('when the val is not contained in the BST', () => {
            it ('should return false', () => {
                expect(tree.searchIter(-4)).to.equal(false);
                expect(tree.searchIter(1.5)).to.equal(false);
                expect(tree.searchIter(14)).to.equal(false);
            });
        });
    });
});


describe('Leet Code #108', () => {
    it('https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/')
});

describe('Leet Code #110', () => {
    it('https://leetcode.com/problems/balanced-binary-tree/')
});


describe('nodeHeight(root)', () => {
    
        it('should return -1 if there is no root', () => {
            let getHeight = nodeHeight();
            expect(getHeight).to.equal(-1);
        })
    
        it('should return a height of three when the left child has at least three left children', () => {
            let node = new TreeNode(1);
            node.left = new TreeNode(2);
            node.right = new TreeNode(3);
            node.right.right = new TreeNode(4);
            node.left.left = new TreeNode(5);
            node.left.left.left = new TreeNode(6);

            let getHeight = nodeHeight(node);
            expect(getHeight).to.equal(3);
            
        })

        it('should return a height of one when the root only has one child', () => {
            let node = new TreeNode(1);
            node.left = new TreeNode(2);
        
            let getHeight = nodeHeight(node);
            expect(getHeight).to.equal(1);
            
        })

        it('should return a height of zero when the root does not have children', () => {
            let node = new TreeNode(1);
            let getHeight = nodeHeight(node);
            expect(getHeight).to.equal(0);
        })
      
        it('should return a height of four when the right child has four right children and the left child has one', () => {
            let node = new TreeNode(1);
            node.left = new TreeNode(2);
            node.right = new TreeNode(3);
            node.right.right = new TreeNode(4);
            node.right.right.right = new TreeNode(5);
            node.right.right.right.right = new TreeNode(6);

            let getHeight = nodeHeight(node);
            expect(getHeight).to.equal(4);
        });
});


describe('leftLeftRotation(node)', () => {
    let node = new TreeNode(20);
    let node15 = new TreeNode(15);
    let node25 = new TreeNode(25);
    let node10 = new TreeNode(10);
    let node7 = new TreeNode(7);
    node15.parent = node;
    node25.parent = node;
    node10.parent = node15
    node7.parent = node10;

    node.left = node15;
    node.right = node25;
    node.left.left = node10;
    node.left.left.left = node7;

    node.left.side = 'left';
    node.right.side = 'right';
    node.left.left.side = 'left';
    node.left.left.left.side = 'left';

    it("the left child and right child should not change if nothing is passed in", () =>{
        expect(node.left.val).to.equal(15);
        expect(node.right.val).to.equal(25);
    });

    it("the left child of the node should become the left left child", () =>{
        leftLeftRotation(node15);
        expect(node.left.val).to.equal(10);
    });
    
    it("the left left child's parent should become the node's parent passed in", () => {
        expect(node.left.parent.side).to.equal(null);
    });

    it("the node rotated to the right should have the left pointer updated to null", () => {
        expect(node.left.right.left).to.equal(null);
    })
})

describe('rightRightRotation(node)', () => {
    let node = new TreeNode(20);
let node15 = new TreeNode(15);
let node25 = new TreeNode(25);
let node30 = new TreeNode(30);
let node32 = new TreeNode(32);
node15.parent = node;
node25.parent = node;
node30.parent = node25
node32.parent = node30;

node.left = node15;
node.right = node25;
node.right.right = node30;
node.right.right.right = node32;

node.right.side = 'right';
node.left.side = 'left';
node.right.right.side = 'right';
node.right.right.right.side = 'right';

    it("the left child and right child should not change if nothing is passed in", () =>{
        expect(node.right.val).to.equal(25);
        expect(node.left.val).to.equal(15);
    });

    it("the right child of the node should become the right right child", () =>{
        rightRightRotation(node25);
        expect(node.right.val).to.equal(30);
    });
    
    it("the right right child's parent should become the node's parent passed in", () => {
        expect(node.right.parent.side).to.equal(null);
    });

    it("the node rotated to the left should have the right pointer updated to null", () => {
        expect(node.right.left.right).to.equal(null);
    })
})

describe('leftRightRotation(node)', () => {
    let node = new TreeNode(20);
    let node15 = new TreeNode(15);
    let node25 = new TreeNode(25);
    let node10 = new TreeNode(10);
    let node14 = new TreeNode(14);
    node15.parent = node;
    node25.parent = node;
    node10.parent = node15
    node14.parent = node10;

    node.left = node15;
    node.right = node25;
    node.left.left = node10;
    node.left.left.right = node14;

    node.left.side = 'left';
    node.right.side = 'right';
    node.left.left.side = 'left';
    node.left.left.right.side = 'right';

    it("the left child and right child should not change if nothing is passed in", () =>{
        expect(node.left.val).to.equal(15);
        expect(node.right.val).to.equal(25);
    });

    it("the parent node of the node passed should switch places with the node", () =>{
       leftRightRotation(node10);
        expect(node.left.left.val).to.equal(10);
        expect(node.left.val).to.equal(14);
    });
    
    it("the right child and side of the node passed to be null", () => {
        expect(node.left.left.right).to.equal(null);
        
    });

    it("the parent of the node passed in should be updated to a different node", () => {
        expect(node.left.left.parent.val).to.equal(14);
    })

    it("expect the right child of the node passed in to have have the node's parent as it's right child", () => {
        expect(node.left.right.val).to.equal(15);
    })

    it("expect the right child of the node passed in to switch over to the left side", () => {
        expect(node.left.side).to.equal('left')
    })
})