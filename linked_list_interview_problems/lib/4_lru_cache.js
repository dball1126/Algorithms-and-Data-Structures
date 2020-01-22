  // ============================================================================
// Interview Problem: Design and Implement an LRU Cache
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given the implementation of a Doubly Linked List, design and implement 
// an LRU, or Least Recently Used, cache.
//
// ------------
// Explanation:
// ------------
//
// An LRU Cache is a data structure valued for its constant time read and write
// operations. Its methods, get(key) and set(key, val), are both O(1), just
// like a Hash Table.
//
// However, unlike a Hash Table, instead of re-sizing once it reaches its
// maximum capacity for stored items, it instead removes the least recently
// used item from the cache, also in O(1) time.
//
// NOTE: We determine the item that is "Least Recently Used" by its most-recent
// "get" time, not just by its creation time!
//
// --------
// Example:
// --------
//
// const lruCache = new LRUCache(4);   => limit of 4 items
// lruCache.set('a', 'A');
// lruCache.set('b', 'B');
// lruCache.set('c', 'C');
// lruCache.set('d', 'D');
// lruCache.set('e', 'E');
//
// lruCache.get('c')                   => 'C'
// lruCache.get('b')                   => 'B'
//
// Item 'a' was removed because it was the oldest item by insertion/usage
//
// lruCache.get('a')                   => null
//
// Next, item 'e' is removed to make room, because it is the oldest by usage,
// which takes priority.
//
// lruCache.set('f', 'F');
//
// Item 'd' is also removed, because it was retrieved before item 'b' was
// last retrieved.
//
// lruCache.set('g', G);
//
// -----------
// Let's code!
// -----------
// TODO: Implement the LRUCacheItem class zz
class LRUCacheItem {
  constructor(val, key) {
   this.val = val;
   this.key = key;
   this.node = null;
  }
}

// TODO: Implement the LRUCacheItem class here
class LRUCache {
  constructor(limit) {
    this.length = 0;
    this.ordering = new List();
    this.items = {};
    this.limit = limit;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }

  // TODO: Implement the get method here
  get(key) {
 
  }

  // TODO: Implement the set method here
  set(key, val) {
    // Set an existing item
    if(key in this.items) return this.items[key] = val;

      // Set a new item
    let item = new LRUCacheItem(key, val);
      // Make space if necessary
    if(this.length === limit){
      
    } else {
      this.length++

    }
    
   
  }

  isFull() {
    return this.length === this.limit
  }

  prune() {
  
  }

  promote(item) {
  
  }
}


// ----------------------------------------
// Given: Doubly Linked List - Do Not Edit!
// ----------------------------------------
class ListNode {
  constructor(val, prev, next) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }


  delete() {
   if (this.prev) this.prev.next = this.next;
   if (this.next) this.next.prev = this.prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Do This One First

  // Insert at the end of the list.
  push(val) {
   let node = new ListNode(val);
   if (!this.head) {
     this.head = this.tail = node;
   } else if (this.length >= 1) {
     this.tail.next = node;
     node.prev = this.tail;
     this.tail = node;
   }
   this.length++;
   return node;
  }

  // Insert at the head of the list.
  unshift(val) {
    let node = new ListNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else if (this.length >= 1) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++
    return node;
  }

  // Delete at the head of the list.
  shift() {
    if (!this.head) return null;
    let node = this.head;
    if(this.length===1){
      this.head = this.tail = null;
    } else if (this.length >=1) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    this.length--;
    return node.val;
  }

  // Delete at the end of the list.
  pop() {
    if (!this.head) return null;
    let node = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else if (this.length > 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length--;
    return node.val;
  }

  // Move a node to the front of the List
  moveToFront(node) {
   if (!this.head) {
     this.tail = this.head = node;

   } else if (node.val === this.tail.val){
     this.tail.prev = null;
     this.tail = this.tail.prev;
     node.next = this.head;
     this.head.prev = node;
     this.head = node;
     node.prev = null;
   } 
   else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.head.prev = node;
      node.next = this.head;
      node.prev = null;
      this.head = node;
   }

  }

  // Move a node to the end of the List
  moveToEnd(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else if (this.head.val === node.val) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.tail.next = node;
      node.prev = this.tail;
      node.next = null;
      this.tail = node;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.tail.next = node;
      node.prev = this.tail;
      node.next = null;
      this.tail = node;
    }

    // Don't delegate to push, since we want to keep the same
    // object.

  }
}

exports.List = List;
exports.ListNode = ListNode;
exports.LRUCache = LRUCache;
exports.LRUCacheItem = LRUCacheItem;
