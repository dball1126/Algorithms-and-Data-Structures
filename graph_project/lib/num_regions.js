function numRegions(graph) {
    let queue = [graph];

    let count = 0;
    let visited = new Set();
    let node = queue.shift();
    // let boolean = [];
    for (let i in node) {
        let stack = [i];
        let boolean = [];


        if (!visited.has(i)) count++;

        while (stack.length) {
            let inner = stack.pop();

            if (!visited.has(inner)) {
                visited.add(inner)

                for (let i in graph[inner]) {
                    stack.push(graph[inner][i])
                }
            }

        }


    }
    return count;
}
module.exports = {
    numRegions
};