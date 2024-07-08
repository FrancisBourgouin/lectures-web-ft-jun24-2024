// Coffee !
// setTimeout(() => {
//   console.log("Waiting for my cookies!");

//   setTimeout(() => {
//     console.log("Waiting for my cookies!");

//     setTimeout(() => {
//       console.log("Waiting for my cookies!");
//       if(Math.random() > 0.5) return console.log("COOKIE EARLY!")

//       setTimeout(() => {
//         console.log("Waiting for my cookies!");

//         setTimeout(() => {
//           console.log("Cookie time!");
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }, 10000);

// setTimeout(() => {
//   console.log("Waiting for my cookies!");
// }, 10000)

// setTimeout(() => {
//   console.log("Waiting for my cookies!");
// }, 13000)

// grindCoffee
// tampCoffee
// extractCoffee
// frothMilk
// enjoyCoffee

const grindCoffee = (amountOfBeans) => {
  const hasRock = Math.random() > 0.5;

  console.log(`Grinding ${amountOfBeans}g of coffee...`);

  setTimeout(() => {
    if (hasRock) {
      return console.log("(╯°□°）╯︵ ┻━┻");
    }

    return console.log("Coffee is ground!");
  }, 2000);
};

const tampCoffee = () => {
  setTimeout(() => {
    return console.log("Tamping the coffee");
  });
};

const grindCoffeeCBVersion1 = (amountOfBeans, callbackWhenSuccess, callbackWhenFail) => {
  const hasRock = Math.random() > 0.5;

  console.log(`Grinding ${amountOfBeans}g of coffee...`);

  setTimeout(() => {
    if (hasRock) {
      return callbackWhenFail("(╯°□°）╯︵ ┻━┻");
    }

    return callbackWhenSuccess("Coffee is ground!", amountOfBeans);
  }, 2000);
};

grindCoffeeCBVersion1(
  18.5,
  (message, amount) => console.log(message, amount),
  (errorMessage) => console.log("OH NO", errorMessage)
);

const grindCoffeeCBVersion2 = (amountOfBeans, callbackWhenFinished) => {
  const hasRock = Math.random() > 0.5;

  console.log(`Grinding ${amountOfBeans}g of coffee...`);

  setTimeout(() => {
    if (hasRock) {
      const error = "(╯°□°）╯︵ ┻━┻";
      const data = null;

      return callbackWhenFinished(error, data);
    }

    const error = null;
    const data = { message: "Coffee is ground!", amountOfBeans };
    return console.log(error, data);
  }, 2000);
};


grindCoffeeCBVersion2(18.5, (error, data) => {
  if(error){
    return console.log(error)
  }

  console.log(data.message)
  console.log("Amount of coffee ground:", data.amountOfBeans)
})


// fs.readFile("/etc/bob.js", (err, data) => {

// })