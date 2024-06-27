// Why do we want to use functions?

// Smaller programs by limiting repetition
// Data will be scoped to the function
// Limit repetition
// Share helpers between projects

const generateListOfRandomNumbers = function (amount, maxValue) {
  const list = [];

  for (let i = 0; i < amount; i++) {
    const randomNumber = Math.round(Math.random() * maxValue);
    list.push(randomNumber);
  }

  return list;
};

console.log(generateListOfRandomNumbers(5, 900));

// const generateTodayDate = function(){
//   return new Date().toISOString()
// }

const generateTodayDate = () => new Date().toISOString();

console.log(generateTodayDate());

// If we have params, often the function will be more reusable.

// Definitions vs. Expressions

sayHello();

// Definition
// Hoisting
// Reference is bound the the global scope
function sayHello() {
  console.log("Hello!");
}

// Expression
// No hoisting
// Reference bound to a variable
const sayHelloAgain = function () {
  console.log("Hello!");
};
// Arrow
// Subset of function expressions
// Less "noisy"
// Implicit return
// "this" is about the execution scope vs definition scope (In normal objects, "this" will not work the expected way)

const someFunction = () => {
  console.log("Hello!");
};

const addNumbers = (num1, num2) => num1 + num2;

const addNumbersAgain = (num1, num2) => {
  return num1 + num2;
};

// function sayHello(){
//   console.log("MWAHAHAHAHHAHA")
// }

// sayHelloAgain = function(){
//   console.log("MWAHAHAHA!")
// }

// IIFE (Immediatly Invoked Function Expressions)

(function () {
  // Run everything in here!
  const addNumbers = (num1, num2) => num1 + num2;

  const result = addNumbers(6,7)

  console.log(result)
})();


(function () {
  // Run everything in here!
  const addNumbers = (num1, num2) => num1 + num2;

  const result = addNumbers(6,7)

  console.log(result)
})();

// A function with no name / Anonymous function
// Anonymous => We don't refer to it

const sumOfList = function(listOfNumbers) {
  let sum = 0

  for(const number of listOfNumbers){
    sum += number
  }

  return number
}

sumOfList([1,32,5,4,1,12,4])