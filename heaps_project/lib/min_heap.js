class MinHeap {
    constructor() {
       this.array = [null];
    }

    getParent(idx) {
      return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
      this.array.push(val);
      this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
      let parentIdx = this.getParent(idx);
      let parent = this.array[parentIdx];
      let child = this.array[idx];

        if (parent < child) return;

      if (parent > child){
        [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
        this.siftUp(parentIdx);
        }
    }

    deleteMin() {
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        
        let min = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return min;
    }   

    siftDown(idx) {
       if(this.array.length === 2) return;
        let current = this.array[idx];
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftChild = this.array[leftIdx];
        let rightChild = this.array[rightIdx];

        if (leftChild === undefined) leftChild = Infinity;
        if (rightChild === undefined) rightChild = Infinity;

        if (current < leftChild && current < rightChild) return;
        let swapIdx;
        if (leftChild < rightChild){
            swapIdx = leftIdx
        } else {
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);
        
    }
}

module.exports = {
    MinHeap
};