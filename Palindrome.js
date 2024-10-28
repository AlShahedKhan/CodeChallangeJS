function isPalindrome(str){
    // split all char and join them and replace all special char and white space 
    const margeString =str.split("").join("").replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "");
    const lowerCaseString = margeString.toLowerCase(); // make all char lower case
    const len = lowerCaseString.length; // counting the length of string
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (lowerCaseString[i] !== lowerCaseString[len-1-i]) {
            return false;            
        }
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("Mr. Owl ate my metal worm"));