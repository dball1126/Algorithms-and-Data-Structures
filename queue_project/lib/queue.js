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
       let node = new Node(val);
       this.length++;
       if (!this.front) {
           this.front = node;
           this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        return this.size();
    }

    dequeue(){
        if (!this.front) return null;
        let node = this.front;
        this.length--;
        if(!this.length) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        return node.value;
    }
    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;