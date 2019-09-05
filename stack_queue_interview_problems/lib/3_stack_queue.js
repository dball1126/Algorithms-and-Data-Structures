// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        
        if (!this.top){
    this.top = this.bottom = node;
        } else if (this.length === 1) {
            this.top = node;
            node.next = this.bottom;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.size;
    }
    size(){
        return this.length;
    }
    pop(){

    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
