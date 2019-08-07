function breadthFirstSearch(startingNode, targetVal) {
   let queue = [ startingNode ];
   let newSet = new Set();
   while(queue.length) {
       node = queue.shift();
       if (newSet.has(node)) continue;
       newSet.add(node);
       if (node.val === targetVal) return node;
        queue.push(...node.neighbors)
   }
   return null;
}

module.exports = {
    breadthFirstSearch
};