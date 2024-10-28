function countVowels(str) {
    // find the count of vowels 
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
console.log(countVowels("hello world")); // Expected output: 3
console.log(countVowels("Programming")); // Expected output: 3
console.log(countVowels("AEIOU")); // Expected output: 5
