const mug = {
  color: "red",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

const someList = [
  "english",
  "french",
  "portuguese",
  "italian",
  "mandarin",
  "arabic",
  "hindi",
  "punjabi",
];

// for (let i = 0; i < someList.length; i++) {
//   const language = someList[i];

//   console.log(language);
// }

// for (const language of someList) {
//   console.log(language);
// }

// for(let i = 0; i < mug.length; i++){
//   console.log(mug[i])
// }

// for(const value of mug){
//   console.log(value)
// }

const mugKeys = Object.keys(mug)
const mugValues = Object.values(mug)

console.log(mugKeys)
console.log(mugValues)

for(const key of mugKeys){
  console.log(mug[key])
}

for(const key in mug){
  console.log(mug[key])
}