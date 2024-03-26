//! 2) programs in arrow functions

// A) Print odd numbers in an array
//!using arrow function
var result2 =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result2.push(arr[i])
    }
  }
  return result2
}

//B) Convert all the strings to title caps in a string array
let stringArray = ["hello world", "this is a test", "programming is fun"];
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
const titleCapsArray = stringArray.map((str) => toTitleCase(str));

console.log(titleCapsArray);

//! c)Sum of all numbers in an array
const numbers = [10, 21, 33, 44, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

//! d) Return all the prime numbers in an array
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = arr => arr.filter(isPrime);
console.log(getPrimes(numbers));

//! E) Return all the palindromes in an array
const words = ["dad", "hello", "radar", "world", "malayalam"]
const isPalindrome = str => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const findPalindromes = arr => arr.filter(word => isPalindrome(word));


;
const palindromes = findPalindromes(words);
console.log(palindromes);