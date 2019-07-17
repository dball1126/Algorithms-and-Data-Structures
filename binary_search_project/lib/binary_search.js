function binarySearch(array, target) {
    if(array.length === 0) return false;

    let mid = Math.floor(array.length / 2);
    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid + 1);

    if(target < array[mid]){
        return binarySearch(leftSide, target)
    } else if (target > array[mid]) {
        return binarySearch(rightSide, target)
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if(array.length === 0) return -1;

    let mid = Math.floor(array.length / 2);

    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid + 1);

    switch (true) {
        case target === array[mid]:
            return mid;
        case target < array[mid]:
            return binarySearchIndex(leftSide, target);
        case target > array[mid]:
            let rightB =  binarySearchIndex(rightSide, target);
            if(rightB === -1){
                return -1
            } else {
                return mid +1
            }
        default:
            break;
    }
}
console.log(binarySearchIndex([1,2,3,4], 5))

module.exports = {
    binarySearch,
    binarySearchIndex
};