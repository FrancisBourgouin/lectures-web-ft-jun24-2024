const mug = {
  color: "red",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};


const anotherMug = {
  color: "red",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

console.log(mug === anotherMug) // False, because they are different structure

console.log(mug.color === anotherMug.color)