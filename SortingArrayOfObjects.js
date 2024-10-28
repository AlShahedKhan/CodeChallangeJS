function sortByProperty(myArr){
    const sortArr = people.sort((a, b) => a.age - b.age);
    return sortArr;
}
// Test cases
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
console.log(sortByProperty(people, "age"));
// Expected output: [{ name: "Bob", age: 20 }, { name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
