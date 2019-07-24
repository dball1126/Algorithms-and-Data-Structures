// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
    if (!this.front) {
        this.front = newNode;
        this.back = newNode;
    } else {
        let temp = this.back;
        this.back = newNode
        temp.next = this.back;
    }
    this.length++;
    return this.length;

    }

    dequeue(){
        if(!this.front) return null;
        let node = this.front;

        if(this.length === 1){
            this.front = null;
            this.back = null;
        } else {
            let temp = this.front.next;
            this.front = temp;
        }
        this.length--;
        return node.value;
    }
}

exports.Node = Node;
exports.Queue = Queue;