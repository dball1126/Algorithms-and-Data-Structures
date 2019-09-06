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
    push(val){
        let node = new Node(val);
        
        if (!this.top){
    this.top = this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.size();
    }
    size(){
        return this.length;
    }
    pop(){
        if (!this.top) return null;
        const node = this.top;
        if (this.length === 1){
    this.top = this.bottom = null;
        } else {
            this.top = node.next
        }
        this.length--;
        // return node or node.value that is the question
       // it appears the tests rely on the StackQueue class below
        return node.value;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = null;
        this.outStack = null;
        this.front = null;
        this.back = null;
        this.length = 0;
    }
    enqueue(val){
        let node = new Node(val);
        if(!this.front){
            this.front = this.back = node;
        } else if (this.length >= 1){
            this.back.next = node;
            this.back = node;
        }
       this.length++;
       return this.size();
    }
    dequeue(){
        if (!this.front) return null;
        let node = this.front;
        if (this.length === 1) {
            this.front = this.back = null;
        } else if (this.length === 2) {
            this.front = this.back;
        } else {
            this.front = this.front.next
        }
        this.length--;
        return node;
    }

    pop(){

    }
    push(){
        
    }
    size(){
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
