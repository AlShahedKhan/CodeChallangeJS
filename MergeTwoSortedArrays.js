function mergeSortedArrays(myArr1, myArr2){
    // concat array1 with array2 with help of concat() method
    const newArr = myArr1.concat(myArr2).sort();
    //Another way to do it with <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>
    // let newArr = _.union(myArr1,myArr2).sort();
    return newArr;
}
// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2], [3, 4])); // Expected output: [1, 2, 3, 4]
console.log(mergeSortedArrays([], [5, 6])); // Expected output: [5, 6]

