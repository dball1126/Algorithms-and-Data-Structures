class MaxHeap {
    constructor(array = null) {
       this.array = [ array ];
    }

    getParent(idx) {
        return Math.floor(idx / 2)
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
       return 2 * idx + 1;
    }

    insert(val) {
       this.array.push(val);
       this.siftUp(this.array.length-1);
    }

    siftUp(idx) {
       if (idx === 1) return idx;
       let parentIdx = this.getParent(idx);
       let array = this.array;
       
       while(array[idx] > array[parentIdx]) {
           [array[idx], array[parentIdx]] = [array[parentIdx], array[idx]];
           return this.siftUp(parentIdx);
       }
    }
    deleteMax() {
        let array = this.array;
        if (!array[1]) return null;
        if (array.length === 2) return array.pop();
        let max = array[1];
        array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        if (idx === this.array.length-1) return idx;
        let array = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let swapIdx;
        let rightVal = this.array[rightIdx] || -Infinity;
        let leftVal = this.array[leftIdx] || -Infinity;


        if (leftVal > rightVal) {
            swapIdx = leftIdx
        } else {
            swapIdx = rightIdx;
        }
        if(array[idx] > leftVal && array[idx] > rightVal) return
        if (array[idx] < leftVal || array[idx] < rightVal) {
            [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]]
            return this.siftDown(swapIdx);
        } 
    }
 }

module.exports = {
    MaxHeap
};