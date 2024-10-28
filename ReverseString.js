function reverseString(str){
    /*const splitString = str.split(""); // split() method make a string as array
    const reverseArray = splitString.reverse(); // reverse() method reverse the array
    const joinArray = reverseArray.join(""); // join() method join all the elements 
    // of array into a string

    return joinArray;*/
    // Make this in method chining
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));