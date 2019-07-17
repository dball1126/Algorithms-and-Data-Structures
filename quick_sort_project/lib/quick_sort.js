function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();

    let leftside = quickSort(array.filter(el => el < pivot))
    let rightSide = quickSort(array.filter(el => el >= pivot))

    return leftside.concat(pivot, rightSide)
}


module.exports = {
    quickSort
};