const { reverseLinkedList } = require('../lib/1_reverse_linked_list.js');
const { stringify, linkedListIntersection } = require('../lib/2_linked_list_intersection.js');
const { LinkedList, hasCycle } = require('../lib/3_linked_list_cycles.js');
const { List, ListNode, LRUCache, LRUCacheItem } = require('../lib/4_lru_cache.js');

const { expect } = require('chai');

describe('Problem 1: reverseLinkedList', () => {
    let linkedList;
    let result;
    let expected;

    beforeEach(() => {
        linkedList = new LinkedList();
        expected = new LinkedList();
    });

    it('Should exist', () => {
        expect(reverseLinkedList).to.exist;
    });

    it('Should be a function', () => {
        expect(reverseLinkedList).to.be.a('function');
    });

    it('Should return a LinkedList object', () => {
        linkedList.addToTail('First');
        result = reverseLinkedList(linkedList);

        expect(result).to.exist;
        expect(result).to.be.an.instanceof(Object);
    });

    it('Should return the same list if head.next is null', () => {
        linkedList.addToTail('First');
        result = reverseLinkedList(linkedList);

        expect(result).to.eql(linkedList);
    });

    it('Should reverse a very short list of only two nodes', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        result = reverseLinkedList(linkedList);

        expected.addToTail('Second');
        expected.addToTail('First');

        expect(result).to.eql(expected);
    });

    it('Should reverse a medium length list', () => {
        linkedList.addToTail('First');
        for (let i = 1; i <= 50; i++) linkedList.addToTail('First + ' + i);
        result = reverseLinkedList(linkedList);

        for (let j = 50; j > 0; j--) expected.addToTail('First + ' + j);
        expected.addToTail('First');

        expect(result).to.eql(expected);
    });

    it('Should reverse a very long list', () => {
        linkedList.addToTail('First');
        for (let i = 1; i <= 1000; i++) linkedList.addToTail('First + ' + i);
        result = reverseLinkedList(linkedList);

        for (let j = 1000; j > 0; j--) expected.addToTail('First + ' + j);
        expected.addToTail('First');

        expect(result).to.eql(expected);
    });
});

describe('Problem 2: linkedListIntersection', function () {
    let list1;
    let list2;
    let expected;
    let result;

    beforeEach(() => {
        list1 = new LinkedList();
        list2 = new LinkedList();
    });

    it('Should exist', function () {
        expect(linkedListIntersection).to.exist;
    });

    it('Should be a function', function () {
        expect(linkedListIntersection).to.be.a('function');
    });

    it('Should return the correct node in the case of two merged linked lists of the same size', function () {
        let nodeD;
        let nodeZ;

        list1.addToTail('A');
        list1.addToTail('B');
        list1.addToTail('C');
        list1.addToTail('D');
        list1.addToTail('E');
        list1.addToTail('F');

        list2.addToTail('X');
        list2.addToTail('Y');
        list2.addToTail('Z');

        nodeD = list1.get(3);
        nodeZ = list2.get(2);

        nodeZ.next = nodeD;

        expected = 'DEF';
        result = stringify(linkedListIntersection(list1, list2));

        expect(result).to.equal(expected);
    });


    it('Should return the correct node in the case of two merged linked lists of different sizes', function () {
        let nodeD;
        let nodeY;

        list1.addToTail('A');
        list1.addToTail('B');
        list1.addToTail('C');
        list1.addToTail('D');
        list1.addToTail('E');
        list1.addToTail('F');

        list2.addToTail('X');
        list2.addToTail('Y');

        nodeD = list1.get(3);
        nodeY = list2.get(1);

        nodeY.next = nodeD;

        expected = 'DEF';
        result = stringify(linkedListIntersection(list1, list2));

        expect(result).to.equal(expected);
    });

    it('Should return null if the two lists have no intersection', function () {
        list1.addToTail('A');
        list2.addToTail('X');

        expected = null;
        result = linkedListIntersection(list1, list2);

        expect(result).to.equal(expected);
    });
});

describe('Problem 3: hasCycle', () => {
    let linkedList;
    let result;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('Should exist', () => {
        expect(hasCycle).to.exist;
    });

    it('Should be a function', () => {
        expect(hasCycle).to.be.a('function');
    });

    it('Should take at least one argument', () => {
        expect(hasCycle.length).to.be.above(0);
    });

    it('Should return something', () => {
        linkedList.addToTail('First');

        result = hasCycle(linkedList);
        expect(result).to.exist;
    });

    it('Should return a boolean', () => {
        linkedList.addToTail('First');

        result = hasCycle(linkedList);
        expect(result).to.be.a('Boolean');
    });

    it('Should return false for a linked list with only 1 node that ponits to null', () => {
        linkedList.addToTail('First');

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a linked list with only 1 node that points to itself', () => {
        linkedList.addToTail('First');
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return false for a non-cyclical linked list of size 2', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a cyclical linked list of size 2', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return false for a non-cyclical linked list of size 4', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a cyclical linked list of size 4 where the tail links to the head', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return true for a cyclical linked list of size 4 where the tail links to a node in the middle of the list', () => {
        let secondNode;

        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');
        secondNode = linkedList.get(1);
        linkedList.tail.next = secondNode;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return false for a non-cyclical linked list of size 5', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');
        linkedList.addToTail('Fifth');

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a cyclical linked list of size 5 where the tail links to the head', () => {
        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');
        linkedList.addToTail('Fifth');
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return true for a cyclical linked list of size 5 where the tail links to a node in the middle of the list', () => {
        let secondNode;

        linkedList.addToTail('First');
        linkedList.addToTail('Second');
        linkedList.addToTail('Third');
        linkedList.addToTail('Fourth');
        linkedList.addToTail('Fifth');
        secondNode = linkedList.get(1);
        linkedList.tail.next = secondNode;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return false for a medium-sized non-cyclical linked list', () => {
        linkedList.addToTail('First');
        for (let i = 1; i < 101; i++) linkedList.addToTail('First + ' + i);

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a medium-sized cyclical linked list where the tail links to the head', () => {
        linkedList.addToTail('First');
        for (let i = 1; i < 101; i++) linkedList.addToTail('First + ' + i);
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return true for a medium-sized cyclical linked list where the tail links to a node in the middle of the list', () => {
        let fiftiethNode;

        linkedList.addToTail('First');
        for (let i = 1; i < 101; i++) linkedList.addToTail('First + ' + i);
        fiftiethNode = linkedList.get(49);
        linkedList.tail.next = fiftiethNode;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return false for a large-sized non-cyclical linked list', () => {
        linkedList.addToTail('First');
        for (let i = 1; i < 1000000; i++) linkedList.addToTail('First + ' + i);

        result = hasCycle(linkedList);
        expect(result).to.be.false;
    });

    it('Should return true for a large-sized cyclical linked list where the tail links to the head', () => {
        linkedList.addToTail('First');
        for (let i = 1; i < 1000000; i++) linkedList.addToTail('First + ' + i);
        linkedList.tail.next = linkedList.head;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });

    it('Should return true for a large-sized cyclical linked list where the tail links to a node in the middle of the list', () => {
        let fiveHundredThousandthNode;

        linkedList.addToTail('First');
        for (let i = 1; i < 1000000; i++) linkedList.addToTail('First + ' + i);
        fiveHundredThousandthNode = linkedList.get(499999);
        linkedList.tail.next = fiveHundredThousandthNode;

        result = hasCycle(linkedList);
        expect(result).to.be.true;
    });
});

describe('Problem 4: LRUCache', () => {
    let lruCache;

    beforeEach(() => {
        lruCache = new LRUCache(10);
    });

    describe('LRUCacheItem', () => {
        it('Should exist', () => {
            expect(LRUCacheItem).to.exist;
        });

        it('Should be a function (ES6 classes are "special functions")', () => {
            expect(LRUCacheItem).to.be.a('function');
        });
    });

    describe('LRUCache', () => {
        it('Should exist', () => {
            expect(LRUCache).to.exist;
        });

        it('Should be a function (ES6 classes are "special functions")', () => {
            expect(LRUCache).to.be.a('function');
        });

        it('Should take at least one argument', () => {
            expect(LRUCache.length).to.be.above(0);
        });

        describe('When unpopulated', () => {
            it('Should be empty', () => {
                expect(lruCache.size()).to.equal(0);
            });
        });

        describe('When populated and under its limit', () => {
            it('Should contain all of the populated items', () => {
                for (let i = 0; i < 9; i++) lruCache.set(i, i);
                for (let j = 0; j < 9; j++) expect(lruCache.get(j)).to.equal(j);
            });
        });

        describe('When populated and over its limit', () => {
            it('Should contain exactly "limit" items', () => {
                for (let i = 0; i < 20; i++) lruCache.set(i, i);

                expect(lruCache.size()).to.equal(10);
            });

            it('Should only contain the most recently used items', () => {
                for (let i = 0; i < 15; i++) lruCache.set(i, i);
                for (let j = 0; j < 5; j++) expect(lruCache.get(j)).to.equal(null);
                for (let k = 5; k < 15; k++) expect(lruCache.get(k)).to.equal(k);
            });

            it('Should remove items in LRU order', () => {
                for (let i = 0; i < 8; i++) lruCache.set(i, i);
                lruCache.get(0);
                for (let j = 8; j < 14; j++) lruCache.set(j, j);

                expect(lruCache.get(0)).to.equal(0);
                expect(lruCache.get(1)).to.equal(null);
            });
        });
    });

    describe('LRUCache Methods', () => {
        it('Should have methods named "size", "get", and "set"', () => {
            expect(lruCache.size).to.be.a('function');
            expect(lruCache.get).to.be.a('function');
            expect(lruCache.set).to.be.a('function');
        });

        describe('size', () => {
            it('Should return the size of the LRUCache', () => {
                expect(lruCache.size()).to.equal(0);
                lruCache.set('a', 'A');
                expect(lruCache.size()).to.equal(1);
                lruCache.set('b', 'B');
                expect(lruCache.size()).to.equal(2);
                lruCache.set('c', 'C');
                expect(lruCache.size()).to.equal(3);
            });
        });

        describe('get', () => {
            it('Should return null if the LRUCache does not have an item corresponding to the key provided', () => {
                lruCache.set('a', 'A');
                lruCache.set('b', 'B');

                expect(lruCache.get('c')).to.equal(null);
            });

            it('Should return the value of an item in the LRUCache that corresopnds to the key provided', () => {
                lruCache.set('a', 'A');
                lruCache.set('b', 'B');

                expect(lruCache.get('a')).to.equal('A');
                expect(lruCache.get('b')).to.equal('B');
            });
        });

        describe('set', () => {
            it('Should create a new item and add it to the LRUCache if one doesn\'t exists with the key provided', () => {
                lruCache.set('a', 'A');
                lruCache.set('b', 'B');

                expect(lruCache.get('a')).to.equal('A');
                expect(lruCache.get('b')).to.equal('B');
            });

            it('Should update the item corresponding to the key provided if one already exists with that key', () => {
                lruCache.set('a', 'A');
                lruCache.set('b', 'B');
                lruCache.set('a', 'Not A');
                lruCache.set('b', 'Not B');

                expect(lruCache.get('a')).to.equal('Not A');
                expect(lruCache.get('b')).to.equal('Not B');
            });
        });
    });
});


describe('Problem 5: Doubly Linked List', () => {
    let list;
    let listNode;

    beforeEach(() => {
        list = new List();
    });

    describe('ListNode Constructor', () => {
        it('Should exist', () => {
            expect(ListNode).to.exist;
        });

        it('Should be a function (ES6 classes are "special functions")', () => {
            expect(ListNode).to.be.a('function');
        });

        it('Should have "prev" and "val" and "next" properties', () => {
            // it('Should have value, next, and prev properties', () => {  // Doubly Linked Lists Only!
            node = new Node('A');
            expect(node).to.have.property('prev');
            expect(node).to.have.property('val');
            expect(node).to.have.property('next');
            // expect(node).to.have.property('prev');  // Doubly Linked Lists Only!
        });
    });

    describe('List Constructor', () => {
        it('Should exist', () => {
            expect(List).to.exist;
        });

        it('Should be a function (ES6 classes are "special functions")', () => {
            expect(List).to.be.a('function');
        });

        it('Should have head, tail, and length properties', () => {
            expect(list).to.have.property('head');
            expect(list).to.have.property('tail');
            expect(list).to.have.property('length');
        });

        it('Should always keep track of the length of the list', () => {
            expect(list.length).to.equal(0);
            list.push('C');
            expect(list.length).to.equal(1);
            list.unshift('A');
            expect(list.length).to.equal(2);
            list.shift();
            expect(list.length).to.equal(1);
            list.pop(1);
            expect(list.length).to.equal(0);
        });
    });

    describe('List Methods', () => {
        it('Should have methods named "unshift", "shift", "push", "pop", "moveToFront", "moveToEnd"', () => {
            expect(list.addToTail).to.be.a('function');
            expect(list.removeTail).to.be.a('function');
            expect(list.addToHead).to.be.a('function');
            expect(list.removeHead).to.be.a('function');
            expect(list.contains).to.be.a('function');
            expect(list.get).to.be.a('function');
            expect(list.set).to.be.a('function');
            expect(list.insert).to.be.a('function');
            expect(list.remove).to.be.a('function');
            expect(list.size).to.be.a('function');
        });

        describe('addToTail', () => {
            it('Should reassign the tail pointer when new nodes are added to the tail', () => {
                list.addToTail('A');
                expect(list.tail.value).to.equal('A');
                list.addToTail('B');
                expect(list.tail.value).to.equal('B');
            });

            it('Should reassign both the head and tail pointers when a new node is added to the tail of an empty list', () => {
                list.addToTail('A');
                expect(list.head).to.eql({ value: 'A', next: null });
                expect(list.tail).to.eql({ value: 'A', next: null });
            });

            it('Should update the length property after new nodes are added to the tail', () => {
                expect(list.length).to.equal(0);
                list.addToTail('A');
                expect(list.length).to.equal(1);
                list.addToTail('B');
                expect(list.length).to.equal(2);
            });

            it('Should return the updated list after new nodes are added to the tail', () => {
                expect(list.addToTail('A')).to.eql({
                    head: { value: 'A', next: null },
                    tail: { value: 'A', next: null },
                    length: 1
                });
                expect(list.addToTail('B')).to.eql({
                    head: { value: 'A', next: { value: 'B', next: null } },
                    tail: { value: 'B', next: null },
                    length: 2
                });
            });
        });

        describe('removeTail', () => {
            it('Should return undefined if the list is empty', () => {
                expect(list.removeTail()).to.equal(undefined);
            });

            it('Should remove tail node from the list when removeTail is called', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.tail.value).to.equal('B');
                list.removeTail();
                expect(list.tail.value).to.equal('A');
            });

            it('Should reassign the new tail\'s next pointer to null', () => {
                list.addToTail('A');
                list.addToTail('B');
                list.addToTail('C');
                expect(list.head.next.next).to.eql({ value: 'C', next: null });
                list.removeTail();
                expect(list.head.next.next).to.eql(null);
            });

            it('Should update the length property after removing the tail node', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.length).to.equal(2);
                list.removeTail();
                expect(list.length).to.equal(1);
                list.removeTail();
                expect(list.length).to.equal(0);
            });

            it('Should reassign both the head and tail pointers to null when tail is removed from a list of only one node', () => {
                list.addToTail('A');
                expect(list.length).to.equal(1);
                list.removeTail();
                expect(list.head).to.equal(null);
                expect(list.tail).to.equal(null);
            });

            it('Should return the removed tail node when removeTail is called', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.removeTail()).to.eql({ value: 'B', next: null });
            });

        });

        describe('addToHead', () => {
            it('Should reassign the head pointer when new nodes are added to the head', () => {
                expect(list.head).to.equal(null);
                list.addToHead('B');
                expect(list.head).to.eql({ value: 'B', next: null });
                list.addToHead('A');
                expect(list.head).to.eql({ value: 'A', next: { value: 'B', next: null } });
            });

            it('Should reassign both the head and tail pointers when a new node is added to the head of an empty list', () => {
                list.addToHead('A');
                expect(list.head).to.eql({ value: 'A', next: null });
                expect(list.tail).to.eql({ value: 'A', next: null });
            });

            it('Should update the length property after new nodes are added to the head', () => {
                expect(list.length).to.equal(0);
                list.addToHead('A');
                expect(list.length).to.equal(1);
                list.addToHead('B');
                expect(list.length).to.equal(2);
            });

            it('Should return the updated list after new nodes are added to the head', () => {
                expect(list.addToHead('B')).to.eql({
                    head: { value: 'B', next: null },
                    tail: { value: 'B', next: null },
                    length: 1
                });
                expect(list.addToHead('A')).to.eql({
                    head: { value: 'A', next: { value: 'B', next: null } },
                    tail: { value: 'B', next: null },
                    length: 2
                });
            });
        });

        describe('removeHead', () => {
            it('Should return undefined if the list is empty', () => {
                expect(list.removeHead()).to.equal(undefined);
            });

            it('Should remove head node from the list when removeHead is called', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.head.value).to.equal('A');
                list.removeHead();
                expect(list.head.value).to.equal('B');
            });

            it('Should reassign the head pointer to the next node in the list', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.head.value).to.equal('A');
                list.removeHead();
                expect(list.head.value).to.equal('B');
            });

            it('Should update the length property after removing the head node', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.length).to.equal(2);
                list.removeHead();
                expect(list.length).to.equal(1);
                list.removeHead();
                expect(list.length).to.equal(0);
            });

            it('Should reassign both the head and tail pointers to null when head is removed from a list of only one node', () => {
                list.addToTail('A');
                expect(list.length).to.equal(1);
                list.removeHead();
                expect(list.head).to.equal(null);
                expect(list.tail).to.equal(null);
            });

            it('Should return the removed head node when removeHead is called', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.removeHead()).to.eql({ value: 'A', next: { value: 'B', next: null } });
            });
        });

        describe('contains', () => {
            it('Should contain a value that was added', () => {
                list.addToTail('A');
                list.addToTail('B');
                expect(list.contains('A')).to.equal(true);
                expect(list.contains('B')).to.equal(true);
                expect(list.contains('C')).to.equal(false);
            });

            it('Should not contain a value that was removed', () => {
                list.addToTail('A');
                list.addToTail('B');
                list.removeHead();
                expect(list.contains('A')).to.equal(false);
            });
        });

        describe('get', () => {
            it('Should return null if index is out of bounds', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.get(7)).to.equal(null);
            });

            it('Should return node at index specified when get is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.get(1)).to.eql({ value: 'B', next: { value: 'C', next: null } });
            });
        });

        describe('set', () => {
            it('Should return true if node\'s value at index is updated', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('D');
                expect(linkedList.get(1)).to.eql({ value: 'B', next: { value: 'D', next: null } });
                expect(linkedList.set(2, 'C')).to.equal(true);
                expect(linkedList.get(1)).to.eql({ value: 'B', next: { value: 'C', next: null } });
            });

            it('Should return false if node is not found at provided index', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.set(2, 'C')).to.equal(false);
            });
        });

        describe('insert', () => {
            it('Should return false if index is out of bounds', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.insert(3, 'D')).to.equal(false);
            });

            it('Should return true if node is successfully inserted at index', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('D');
                expect(linkedList.get(1)).to.eql({ value: 'B', next: { value: 'D', next: null } });
                expect(linkedList.insert(2, 'C')).to.equal(true);
                expect(linkedList.get(1)).to.eql({ value: 'B', next: { value: 'C', next: { value: 'D', next: null } } });
            });

            it('Should update the length property when a node is inserted', () => {
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                linkedList.addToTail('E');
                expect(linkedList.length).to.equal(3);
                linkedList.insert(2, 'D');
                expect(linkedList.length).to.equal(4);
                linkedList.insert(0, 'A');
                expect(linkedList.length).to.equal(5);
                linkedList.insert(4, 'F');
                expect(linkedList.length).to.equal(6);
            });
        });

        describe('remove', () => {
            it('Should return undefined if index is out of bounds', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.remove(3)).to.equal(undefined);
            });

            it('Should remove node at index from the list when remove is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.get(0)).to.eql({ value: 'A', next: { value: 'B', next: { value: 'C', next: null } } });
                linkedList.remove(1);
                expect(linkedList.get(0)).to.eql({ value: 'A', next: { value: 'C', next: null } });
            });

            it('Should return the removed node when remove is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.remove(1)).to.eql({ value: 'B', next: { value: 'C', next: null } });
            });

            it('Should update the length property when a node is removed', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                linkedList.remove(1);
                expect(linkedList.length).to.equal(2);
                linkedList.remove(1);
                expect(linkedList.length).to.equal(1);
            });
        });

        describe('size', () => {
            it('Should return the length of the list', () => {
                expect(linkedList.size()).to.equal(0);
                linkedList.addToTail('A');
                expect(linkedList.size()).to.equal(1);
                linkedList.addToTail('B');
                expect(linkedList.size()).to.equal(2);
                linkedList.removeTail();
                expect(linkedList.size()).to.equal(1);
            });
        });
    });
});