// This is weird!

const superDog = {
  name:"Petit chien",
  icon:"🐶",
  sound:"Waf waf!",
  type:"dog",
  isHappy:true,
  makeSound: function(){
    console.log(`${this.icon}: ${this.sound}`)
  }
}
// superDog.makeSound()

// console.log(this)

const listOfAnimals = [
  {name:"Pequeno Pollo", icon:"🐔", sound:"Pock pock!"},
  {name:"Bob The Parrot", icon:"🦜", sound:"Quack quack!"},
  {name:"Felix", icon:"🐈", sound:"Meooooooow!"},
]

const generateAnimalObjects = function(listOfAnimals){
  const outputBuffer = []

  for(const animal of listOfAnimals){
    const newAnimalObject = {
      name:animal.name,
      icon:animal.icon,
      sound:animal.sound,
      isHappy:Math.random() > 0.5,
      makeSound:function(){
        console.log(`${this.icon}: ${this.sound}`)
      }
    }

    outputBuffer.push(newAnimalObject)
  }

  return outputBuffer
}

const animals = generateAnimalObjects(listOfAnimals)

console.log(animals)

const felixTheCat = animals[2]

felixTheCat.makeSound()

// const someArray = new Array()
// const someDate = new Date()
// const someError = new Error()