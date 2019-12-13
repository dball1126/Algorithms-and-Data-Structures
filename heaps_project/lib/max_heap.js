class MaxHeap {
    constructor(array = null) {
      this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2
    }

    getRightChild(idx) {
        return idx * 2 + 1
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length-1);

    }

    siftUp(idx) {
        if (idx === 1) return;
        const parentIdx = this.getParent(idx);
        
    
        const parent = this.array[parentIdx];
        const current = this.array[idx];
        if (parent > current) return;

        if (parent < current){
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }

    }

    deleteMax() {
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();

        const max = this.array[1];
        this.array[1] = this.array.pop();
        // if (this.array[1] < this.array[this.getLeftChild(1)] || this.array[1] < this.array[this.getRightChild(1)]){

            this.siftDown(1);
        // }
        return max;
      
    }

    siftDown(idx) {
        if (idx === 0) return null;
        if (this.array.length === 2) return null;

        const leftIdx = this.getLeftChild(idx);
        const rightIdx = this.getRightChild(idx);
        const current = this.array[idx];
        let left = this.array[leftIdx];
        let right = this.array[rightIdx];

        if (left === undefined) left = -Infinity;
        if (right === undefined) right = -Infinity; 

        if (current > left && current > right) return;

        
        let swapIdx;
        if ( left < right){
            swapIdx = rightIdx
        }  else {
            swapIdx = leftIdx;
        }
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.siftDown(swapIdx);
    }
 }

module.exports = {
    MaxHeap
};