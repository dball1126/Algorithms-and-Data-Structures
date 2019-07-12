function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    return array
}

function bubbleSort(array) {
    let flag = false;

    while(flag === false){
        flag = true;
        for (let i = 0; i < array.length; i++) { 
            if(array[i] > array[i+1]){
                // [array[i], array[i+1]] = [array[i+1], array[i]]
                swap(array, i, i+1)
                flag = false;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};