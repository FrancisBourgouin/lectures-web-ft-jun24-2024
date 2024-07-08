// Promises!

// A guarantee that you WILL do something (FUTURE!)

// We'll finish on time
// Status: Pending!

// The time has come!
// We finished on time => Promise was resolved successfully!
// We didn't finish on time => Promise statement was rejected!

// const thisPromise = new Promise((resolve, reject) => {
//   const isResolvedSuccessfully = Math.random() > 0.5;
//   setTimeout(() => {
//     if (isResolvedSuccessfully) {
//       return resolve("YAY!");
//     }

//     return reject("OH NO.");
//   }, 1000);
// });

// // console.log(thisPromise);

// thisPromise
//   .then((message) => console.log("Success!", message)) // Resolve
//   .catch((message) => console.log("Error!", message)) // Reject
//   .finally(() => console.log("We're done!")); // Promise is done!

const grindCoffeePromise = (amountOfBeans) => {
  const hasRock = Math.random() > 0.1;

  console.log(`Grinding ${amountOfBeans}g of coffee...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasRock) {
        return reject("(╯°□°）╯︵ ┻━┻");
      }

      return resolve("Coffee is ground!", amountOfBeans);
    }, 2000);
  });
};

const tampCoffeePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Coffee is tamped!");
    }, 1000);
  });
};

const extractCoffeePromise = (runtimeInS) => {
  const isSplashing = Math.random() > 0.8;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSplashing) {
        return reject("🏊🏊🏊🏊");
      }

      return resolve("succesfully extracted!", runtimeInS);
    }, 1000);
  });
};

const extractFor30Secs = () => extractCoffeePromise(30);

grindCoffeePromise(18.5)
  .then((message, amountOfBeans) => {
    console.log(message);
    console.log(`Ground amount is: ${amountOfBeans}g`);
  })
  .catch((err) => {
    console.log(err);
    console.log("Let's put those bad beans to the tamper anyway");
  })
  .then(tampCoffeePromise)
  .then((message) => {
    console.log(message);
  })
  .then(extractFor30Secs)
  .then((message, runtimeInS) => {
    console.log(message);
    console.log(`Runtime is: ${runtimeInS}s`);
  })
  .catch((error) => console.log("Oh no!", error));

fs.readFile("./QUESTIONS.md", { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    return console.log("data", data);
  }

  console.log(err);
});

fsPromises
  .readFile("./QUESTIONS.md", { encoding: "utf-8" })
  .then(console.log("data", data))
  .catch((err) => console.log("error", err));


axios.get("...").then().catch()