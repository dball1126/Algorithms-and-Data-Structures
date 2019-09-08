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
  constructor(key, val) {
    this.key = key || null;
    this.val = val || null;
    this.node = null;
  }
}

// TODO: Implement the LRUCacheItem class here
class LRUCache {
  constructor(limit) {
    this.items = {};
    this.ordering = new List();
    this.limit = limit;
    this.length = 0;
  }

  // TODO: Implement the size method here
  size() {
   return this.length;
  }

  // TODO: Implement the get method here
  get(key) {
   if (!this.items[key]) return null;

   const item = this.items[key];
   this.promote(item);
   return item.val;
  }

  // TODO: Implement the set method here
  set(key, val) {
   if (!this.items[key]) return null;
   let node = new LRUCacheItem(key, val);
   this.items[key] = node;
   
   this.promote(node);
  }

  isFull() {
   return this.length >= this.limit;
  }

  prune() {
   
  }

  promote(item) {
   this.ordering.moveToFront(item.node)
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
  
  }

  // Delete at the end of the list.
  pop() {
  
  }

  // Move a node to the front of the List
  moveToFront(node) {
   

  }

  // Move a node to the end of the List
  moveToEnd(node) {
  

    // Don't delegate to push, since we want to keep the same
    // object.

  }
}

exports.List = List;
exports.ListNode = ListNode;
exports.LRUCache = LRUCache;
exports.LRUCacheItem = LRUCacheItem;
