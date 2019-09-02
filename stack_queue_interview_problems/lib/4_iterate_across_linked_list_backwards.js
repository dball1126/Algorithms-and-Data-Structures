// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    if (!linkedList.head) return undefined;
    let queue = [];
    let current = linkedList.head;

    while(current) {
        queue.unshift(current);
        current = current.next;
    }
    let newHead = queue[0];
    for (let i = 0; i+1 < queue.length; i++) {
        current = queue[i];
        current.next = queue[i+1];
    }
    linkedList.head = newHead;
    return newHead;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
