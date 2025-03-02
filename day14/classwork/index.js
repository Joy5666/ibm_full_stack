
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }
// const array = [3,6,9,2,56,34,98,56,23,12,90];
// const sortedArray = sortArray(array);
// console.log(sortedArray);
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    const pivot = arr[arr.length - 1];

    const left = [];
    const middle = [];
    const right = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            middle.push(element);
        }
    }

    
    return [...quicksort(left), ...middle, ...quicksort(right)];
}
}

const array = [3,6,9,2,56,34,98,56,23,12,90];
const sortedArray = quicksort(array);
console.log(sortedArray); 