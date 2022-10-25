console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}!`;
}
// Remember to call the function to test

console.log("test - should say 'Hello Homer!", helloName("Homer"));
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log("test - should add 2 and 3", addNumbers(2,3))
// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  return num1*num2*num3
}
console.log("test, should multiply 2,3,and 5", multiplyThree(2,3,5))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.pop()
}

console.log("get last - should say 13", getLast([1,2,3,4,13]))
console.log("get last - should say undefined", getLast([]))
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i = 0; i<array.length; i++) {
    if (value===array[i]) {
      return true;
    }
  }
  return false;
}

console.log("find- should return true", find(7,[1,4,3,6,7]))
console.log("find - should return false", find(8,[1,3,5,6,4,2]))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0)===letter) {
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numArray) {
  let sum = 0
  for (let i = 0; i<numArray.length; i++) {
    sum+=numArray[i]
  }
  // TODO: loop to add items
  return sum;
}

console.log("sumAll - should return 10", sumAll([1,2,3,4]))
console.log("sumAll - should return 20", sumAll([10,10,20,-20]))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function positives (numArray) {
  let newArray = []
  for (let i=0; i<numArray.length;i++) {
    if (numArray[i]>0) {
      newArray.push(numArray[i]);
    }
  }
  return newArray;
}

console.log("test positives, should return only positives from an array 1,-2,3,-4,5,-6", positives([1,-2,3,-4,5,-6]))
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// prob 1: I was supposed to change a DNA sequence into an RNA sequence

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
   return dna.replace(/T/g, "U");
}

//prob 2: I was supposed iterate through an array and multiply each number, like sumAll but multiplying
function grow(x){
  let t = 1;
  for(n of x) {
    t*=n;
  }
return t;
}

//prob 3 stretch goal from group project

function countStringInArray(arr, string) {
  let counter = 0
  for (let f=0; f <arr.length; f++) {
      if (arr[f] === string) {
          counter++;
      }
  } return counter;
}
//prob 4 from codewars
// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
function isItANum(str) {
  newStr = str.replace(/[^0-9\.]+/g, "")
    if(newStr.length===11 && newStr.charAt(0)==0){
      return newStr;
    } else {
      return "Not a phone number"
    }
    // your code here;
    // I'm learning Regex through freecodecamp so I understand the principles, but I found this particular Regex by googling, because I'm not that good at it yet
}

  console.log(isItANum("qkwhlkklkhlkdaskh891"))
  //test