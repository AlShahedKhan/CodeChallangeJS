const original = { name: "Alice", age: 25, hobbies: ["reading", "traveling"] };
const clone = structuredClone(original);

console.log(original);
console.log(clone !== original);
