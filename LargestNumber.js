function findLargestNumber(value){
    // used math max function and apply it in findLargestNumber function
    return Math.max.apply(null, value);
}
// Test cases
console.log(findLargestNumber([1, 2, 3, 99, 4])); // Expected output: 99
console.log(findLargestNumber([-5, -1, -100, -50])); // Expected output: -1
console.log(findLargestNumber([10, 20, 30, 40, 100])); // Expected output: 100
