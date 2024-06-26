// Method => Method Man
// Function in a given context

const makeSoundOld = function(animal){
  if(animal.type === "chicken"){
    console.log("🐔: Pock pock!")
  }

  if(animal.type === "dog"){
    console.log("🐶: Waf waf!")
  }
}

const chicken = {
  name:"Pequeno Pollo",
  type:"chicken",
  isHappy:true,
  makeSound: function(){
    for(let i = 0; i < Math.floor(Math.random() * 10); i++){
      console.log("🐔: Pock pock!")
    }
  }
}

const dog = {
  name:"Petit chien",
  type:"dog",
  isHappy:true,
  makeSound: function(){
    console.log("🐶: Waf waf!")
  }
}

const cat = {
  makeSound: function(){
    console.log("🐶: Waf waf!")
  }
}

// makeSound(chicken)
// makeSound(dog)

console.log(dog.makeSound)

chicken.makeSound()

console.log(Object.values(chicken))