// Callbacks! And HoFs !

// Callbacks => Relationship status between a function and a higher order function
// Any function can be a callback

// A callback can either be a named function, or an anonymous function

someHOF(someCallback);

someHOF((value) => value * 2);

// Arrow functions are extremely practical when using callbacks, because of their minimalist nature

someHOF((value) => value * 2);

someHOF(function (value) {
  return value * 2;
});

// When building HoFs, we either start from a specific application, then make it generic
// Or, make it generic from the start if you know what you need

// Make sure that when you use callbacks, you provide the required amount of params !

const someHOFunction = (callback) => {
  callback(1,2,3)
}

const someCallbackGood = (num1, num2) => num1 + num2 // Good

const someCallbackBad = (num1, num2, num3, num4) => num1 + num2 ... // Bad

