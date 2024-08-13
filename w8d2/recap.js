// What is hard in react?


// React!
// Lifecycle of react hooks
// useEffect kind weird
// rendering process react


// Reducers (JS)


const someObj = {
  number:42,
  someFct: function(){
    this.number
  }
}

// function(){}
// This is defined at definition

// () => {}
// This is defined on call



// Javascript Classes

// Date
// Object
// Array
// Promise
// Error

// Everything in PascalCase in JS is most probably a class

// Javascript doesn't actually have classes, they have prototypes
// We have "classes" that are syntax sugar

const someObj = new Object()
const someOtherObj = {} // Syntax Sugar

// const proto = new proto


// FR: Pock pock
// EN: Rawr

class Chicken {
  constructor(name, color, language){
    this.name = name.toLowerCase()
    this.color = color.toLowerCase()
    this.type = "Chicken".toLowerCase()
    this.language = language ? language : "english"
  }

  makeSound(){
    const sound = this.language === "english" ? "RAWR!" : "Pock pock!"
    console.log(sound)
  }

  throwMe(){
    console.log("*** WHAT THE POCK POCK ! ***")
  }
}

class ZeldaChicken extends Chicken{
  constructor(name, color){
    super(name, color, "hyrulean")
  }

  throwMe(){
    console.log("RAWWWWWWWWWWWW")
    console.log("THIS A WARRRRRR")
  }
}

const bob = new Chicken("Bob", "blue", "french")
console.log(bob)

bob.makeSound()
bob.throwMe()


const robert = new ZeldaChicken("Robert", "green")
console.log(robert)


robert.throwMe()
// Multiple chickens that share some properties, and are easily generated