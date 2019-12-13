// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array = null, idx=1) {
    if (array.length <= 2) return true;

    for (let i = 1; (i*2)+1 < array.length; i++) {
        const element = array[i];
        const left = array[i * 2];
        const right = array[(i * 2) + 1]
       if (left > element || right > element)  return false;
    }
    return true
}


module.exports = {
    isMaxHeap
};