//

const someHOFunction = (callback) => {
  // ... do something

  callback();
};

const listOfNumbers = [1, 9001, 1337, 42];

// Take in a list of numbers
// Do a specific action on each number
// Return the new list of numbers

const modifyListOfNumbers = (listOfNumbers, modifyAction) => {
  const newList = [];

  for (let i = 0; i < listOfNumbers.length; i++) {
    const number = listOfNumbers[i];
    const newNumber = modifyAction(number, i, listOfNumbers); // modifyAction has access to the value, index, array
    newList.push(newNumber);
  }

  return newList;
};

const doubleUp = (number) => number * 2;

const weirdMathThing = (number, index, array, amountOfSteps) =>
  number * index * array.length + amountOfSteps;

const compatibleWeirdMathThing = (number, index, array) =>
  weirdMathThing(number, index, array, 5);


const multiplyValueBy = (number, multiplicator) => number * multiplicator

const multiplyValueByTwo = (number) => multiplyValueBy(number, 2)

const multiplyValueByFive = (number) => multiplyValueBy(number, 5)



const newListOld = modifyListOfNumbers(listOfNumbers, compatibleWeirdMathThing);

const newListAgain = modifyListOfNumbers([4,5,6,7], (number) => multiplyValueBy(number, 5));

const newList = modifyListOfNumbers([4,5,6,7], (number) => multiplyValueBy(number, 55));

console.log(newList);
