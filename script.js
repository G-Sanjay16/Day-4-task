//! 1. programs in anonymous function and IIFFE
// A) print odd numbers in an array.
// anonymous function
var result=[]
var a=function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i]);
    }
  }
  return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//!using IIFE function

var result1 = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) 
    {
      result1.push(arr[i])
    }
  }
  console.log(result1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//! B) Convert all the strings to title caps in a string array
// anonymous function
let stringArray = ["hello world", "this is intresting", "this is awesome"];

let titleCaseArray = stringArray.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log(titleCaseArray)

//!using IIFE function
let stringarray = ["hello world", "this is intresting", "this is awesome"];

let titleArray = (function(array) {
    return array.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(stringarray);

console.log(titleCaseArray);

// c)Sum of all numbers in an array
// anonymous function
 
const numbers = [11, 20, 53, 64, 15];

const sum = function(arr) {
    let total = 0;
    arr.forEach(function(num) {
        total += num;
    });
    return total;
};

console.log(sum(numbers));
//!using IIFE function
const numbers1 = [10, 20, 30, 40, 50];

const sum1 = (function(arr) {
    let total = 0;
    arr.forEach(function(num) {
        total += num;
    });
    return total;
})(numbers1);

console.log(sum1);

//! D) Return all the prime numbers in an array
// anonymous function
const numbers5 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const prime = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false; // 0 and 1 are not primes
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(prime(numbers));
//!using IIFE function
const numbers6 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const prime1 = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false; // 0 and 1 are not primes
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(prime1);

//! E) Return all the palindromes in an array
// anonymous function
const wordsArray = ["level", "hello", "dad", "radar", "world", "malayalam"];
const word = (arr) => arr.filter(word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
});
console.log(word(wordsArray)); 

//!using IIFE function
const wordsArray1 = ["level","here", "hello", "racecar", "world", "malayalam", "civic"];
const palindromes = (function(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
})(wordsArray);

console.log(palindromes);

