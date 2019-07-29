// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
       this.value = val;
       this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if (!this.head) {

            this.head = node;
            this.tail = node;
            this.length++;
            return this;
        }
        let newTail = node;
        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            let temp = this.tail;
            this.tail = null;
            this.head = null;
            this.length--;
            return temp;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
     let node = new Node(val);
     if (!this.head) {
         this.head = node;
         this.tail = node;
         this.length++;
         return this;
     }
     let temp = this.head;
     this.head = node;
     this.head.next = temp;
     this.length++;
     return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      if (!this.head) return undefined;
      let removed = this.head;
      if (this.length === 1) {
          this.length--;
          this.head = null;
          this.tail = null;
          return removed;
      }
      this.head = this.head.next;
      this.length--;
      return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.head) return false;
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
       if (index < 0 || index >= this.length) return null;
        if (!this.head) return undefined;
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) return current;
            count++;
            current = current.next
        }
        return undefined;
    }

    // TODO: Implement the set method here
    set(index, val) {
    
    }

    // TODO: Implement the insert method here
    insert(index, val) {
       
    }

    // TODO: Implement the remove method here
    remove(index) {
      

    }

    // TODO: Implement the size method here
    size() {
       return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
