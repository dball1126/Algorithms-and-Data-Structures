function breadthFirstSearch(startingNode, targetVal) {
    let queue = [ startingNode ];
    let visited = new Set();
    while (queue.length) {
        let ele = queue.shift();
        visited.add(ele.val)
       if (ele.val === targetVal) return ele;
      if (ele.neighbors) {
          ele.neighbors.forEach(e => {
              if (!visited.has(e.val)) {
              queue.push(e)
              }
          })
      } else {
          return null;
      }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};