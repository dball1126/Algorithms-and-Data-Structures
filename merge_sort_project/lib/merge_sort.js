function merge(array1, array2) {
    let mergeArr = [];
    while(array1.length || array2.length){
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        if(ele1 < ele2){
            mergeArr.push(array1.shift())
        } else {
            mergeArr.push(array2.shift())
        }
    }
    return mergeArr;
}
// console.log(merge([2,3,4], [1,5,9]))
function mergeSort(array) {
    if(array.length <= 1) return array;

    let midIdx = Math.floor(array.length/2);
    let leftArr = mergeSort(array.slice(0, midIdx));
    let rightArr = mergeSort(array.slice(midIdx));

    return merge(leftArr, rightArr);
}

module.exports = {
    merge,
    mergeSort
};