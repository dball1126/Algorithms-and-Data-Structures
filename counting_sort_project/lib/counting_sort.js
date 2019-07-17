function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }
   

    for (let j = 0; j < counters.length; j++) {
        while(counters[j] > 0){
        result.push(j);
        counters[j]--;
        }
    }
    return result;
}


module.exports = {
    countingSort
};