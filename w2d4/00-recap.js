// Existential questions

// ON/OFF switches

// if (true) {
// } else if (true) {
// } else if (true) {
// } else if (true) {
// } else if (true) {
// } else {
// }

// switch (value) {
//   case 1:
//     const bob = "";
//   // ...
//   case 2:
//     const bob = "";
//   // ...
// }
// Synchronous code

// Starts at the top
// Finishes at bottom

// Asynchronous code

// Starts at the top
// End sometimes?

// This one?
// setTimeout(console.log("Hello!"), 1000); BAD!
// Or this one?
setTimeout(() => {
  console.log("Hello!");
}, 1000);
// Or this one?
const sayHello = () => console.log("Hello!");
setTimeout(sayHello, 1000);
setTimeout(() => sayHello(), 1000);

setTimeout(() => {
  console.log("How are you?");
}, 1000);

// Consecutive timeouts, one after the other

// Oven 350, 10mins, 3, 2, 1, 1 , 1

setTimeout(() => {
  console.log("Waiting for my cookies!");

  setTimeout(() => {
    console.log("Waiting for my cookies!");

    setTimeout(() => {
      console.log("Waiting for my cookies!");
      if(Math.random() > 0.5) return console.log("COOKIE EARLY!")

      setTimeout(() => {
        console.log("Waiting for my cookies!");

        setTimeout(() => {
          console.log("Cookie time!");
        }, 1000);
      }, 1000);
    }, 2000);
  }, 3000);
}, 10000);




setTimeout(() => {
  console.log("Waiting for my cookies!");
}, 10000)

setTimeout(() => {
  console.log("Waiting for my cookies!");
}, 13000)