class MinHeap {
    constructor(array = null) {
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
      this.siftUp(val);
    }

    siftUp(idx) {
      
    }
    deleteMax() {
       
    }

    siftDown(idx) {
       
    }
}

module.exports = {
    MinHeap
};