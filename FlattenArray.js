function flattenArray(myArr){
    const newArr = myArr.flat(Infinity);
    return newArr;
}
// Test cases
console.log(flattenArray([1, [2, [3, 4]], 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, 4, [5, 6]], 7])); // Expected output: [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, 2, 3])); // Expected output: [1, 2, 3]
console.log(flattenArray([[], [3, 4, [5, 6]], 7])); // Expected output: [1, 2, 3, 4, 5, 6, 7]
