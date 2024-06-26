// Why objects?

const mugColor = "white";
const mugContent = "coffee";
const mugCapacity = 250;
const isMugHot = false;
const mugClean = false;

const mug1Color = "white";
const mug1Content = "coffee";
const mug1Capacity = 250;
const isMug1Hot = false;
const mug1Clean = false;

const listOfPropertieOfMug0 = ["white", "coffee", 250, false, false];


// We want to use objects, to be able to list properties of a singular item in a clear way

const mug0 = {
  color: "white",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

const mug1 = {
  color: "white",
  content: "coffee",
  capacity: 250,
  isHot: false,
  isClean: false,
};

// We want to use arrays, to be able to list multiple items that are independent

const listOfMugs = [mug0, mug1]