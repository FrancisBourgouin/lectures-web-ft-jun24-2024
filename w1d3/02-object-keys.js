// const vs let
const mug = {
  color: "red",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

const isItReallyAnotherMugQuestionMark = mug

const weirdMug = {
  color: "red",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

// someDeepObject["name"]["first"]["given"]["range"]
// someDeepObject.name.first[someVariable].range

// Dot notation to access a key (or a property) of an object
// Downside, dot notation is literal 

// Square bracket notation, will evaluate the content inside the bracket and find the associated value
// Downside, it's noisy

// Read
console.log(`The color of the mug is ${mug.color}`)
console.log(`The color of the mug is ${mug["color"]}`)

// Write
mug.color = "#BADA55"
mug["color"] = "#BADA55"

// Read
console.log(`The color of the mug is ${mug.color}`)
console.log(`The color of the mug is ${mug["color"]}`)

// Delete
delete mug.color
delete mug["color"]

// Read
console.log(`The color of the mug is ${mug.color}`)
console.log(`The color of the mug is ${mug["color"]}`)


const getValueFromKey = function(key){
  console.log("The value for the key ", key)
  console.log(mug[key])
}

getValueFromKey("content")
getValueFromKey("isClean")