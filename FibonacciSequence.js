function fibonacci(num){
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 0; i < num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1)); // Expected output: [0]