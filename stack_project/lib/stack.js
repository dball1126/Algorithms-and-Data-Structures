// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
       this.value = val;
       this.next = null;
    }
}

class Stack {
    constructor(){
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }

    push(val){
        let node = new Node(val);
        this.length++;
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        return this.size();
    }

    pop(){
        if (!this.top) return null;
        let node = this.top;
        this.length--;
        if (this.length === 0) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = node.next;
        }
        return node.value;
     
    }

    size(){
      return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
