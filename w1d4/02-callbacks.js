// Callbacks!

// Useful when we have Higher Order Functions
// HoF => A function that will need another function to work, passed as a parameter
// HoF => A function that returns a function definition

const listOfNames = ["Clint", "Sampson", "Nelson", "Kevin", "Merak", "Matthew", "Rohan"];

const sayGoodMorning = (name) => console.log(`Good morning ${name}`);

const sayGoodEvening = (name) => console.log(`Good evening ${name}`);

const sayBye = () => console.log("Bye!");

const outputDouble = (number) => console.log(number * 2);

const forEveryElement = (list, action) => {
  for (const value of list) {
    action(value);
  }
};

// forEveryElement is the HoF
// listOfNames is a parameter
// sayGoodMorning is another parameter (callback)

forEveryElement(listOfNames, sayGoodMorning);
forEveryElement(listOfNames, sayGoodEvening);
forEveryElement(listOfNames, sayBye);

forEveryElement([1, 3, 2454, 235, 3, 2], outputDouble);

const someArray = [1, 3, 2454, 235, 3, 2];
someArray.forEach(outputDouble);
