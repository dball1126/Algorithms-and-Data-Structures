// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array = null, idx=1) {
  let current;
  let left;
  let right;

  for (let i = idx; i < array.length; i++) {
      if (i + 1 <= array.length-1) {
          current = array[i];
          left = array[2 * i];
          right = array[2 * i + 1];
      }
      if (right > current || left > current) return false;
  }
  return true;
}


module.exports = {
    isMaxHeap
};