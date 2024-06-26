// Objects are cool!

// We want to use them when we want to organize multiple values of a singular item (dependent properties of an entity)

// Access elements in an object

const mug = {
  color: "white",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

// Dot notation: "cleaner", but very litteral, make sure that the key exists with that litteral name
// Square bracket notation: Will compute the content inside the square brackets, and use that as a key

mug.isClean

mug["isClean"]

mug["is"+"Clean"]

mug[Math.random() > 0.5 ? "isClean" : "isHot"]

const key = Math.random() > 0.5 ? "isClean" : "isHot"
mug[key]

// Ternary operator (inline if statement) question ? true : false

// Access / Write / Delete keys in an object

mug.isClean

mug.isClean = true

delete mug.isClean

// Object are referenced, not assigned

// Possibility of bookmarking deep objects since we can refer to a object inside an object

// We can't iterate over an object (most of the type (for..in)), ideally we generate an array !

Object.values(mug)

Object.keys(mug)


// We can put everything as a value in an object, as long as it fits inside a normal variable

mug.sip = function(){
  console.log("Nastiest slurp ever.")
}

// Lastly, we can use "this" to access the properties of the current object when defining functions*
// * it is true only for "normal" function definitions