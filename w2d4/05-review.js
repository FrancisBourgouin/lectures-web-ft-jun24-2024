// Callbacks vs Promises

// Most cases, promises are the clear winner

// Promises are always asynchronous!

// A Promise is a class, and we make a new Promise when we need it
new Promise();

// Inside the Promise, we will create a callback function that takes two parameters

const promiseCallback = (resolve, reject) => {
  // The first one is normally called resolve
  // Calling resolve() will then do the content of the .then() method
  // Calling reject() will then do the content of the .catch() method
  // At all times, finally() will be called if reject or resolve is called (after the then / catch)
};

// GOTCHA #1 => A promise is data, so we need to return it when used inside a function


const someFctWithPromise = () => {
  new Promise() // BAD!

  return new Promise() // GOOD!
}

// GOTCHA #2 => If you want to use setTimeout or any async method, use them inside the Promise!

const someFctWithPromiseAgain = () => {
  // BAD!
  setTimeout(() => {
    new Promise() 
  })

  // GOOD!
  return new Promise((resolve, reject) => {
    setTimeout(() => {

    })
  }) 
}

// GOTCHA #3 => If you put a .then() after a .catch() it will always run!


someFailingPromise()
  .then()  // Will be skipped
  .then()  // Will be skipped
  .then()  // Will be skipped
  .then()  // Will be skipped
  .catch() // Will run
  .then()  // Will run


someFailingPromiseAgain()
  .then()  // Will be skipped
  .then()  // Will be skipped
  .then()  // Will be skipped
  .then()  // Will be skipped
  .catch() // Will run