function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentEle = arr[i];
        for (let j = i-1; j >= 0 && currentEle < arr[j]; j--) {
            element2 = arr[j+1];
            element2 = arr[j];
            console.log(element2)
        }
        console.log(arr)
        element2 = currentEle;
    }
    return arr;
}
console.log(insertionSort([2,1,3,-2]))

module.exports = {
    insertionSort
};