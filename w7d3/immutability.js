// Mutation vs Immutability

// Immutability => Can't change / Won't change
// Mutability => 


const someArray = [1,2,3,4,5]

someArray.push(6) // I mutated here
someArray.push(6) // I mutated here

// [1,2,3,4,5,6,6,6,6,6]

someArray.pop()
console.log(someArray)
someArray.pop()
console.log(someArray)
someArray.pop()
console.log(someArray)
someArray.pop()
console.log(someArray)
someArray.pop()
console.log(someArray)


// immutability in programming => We never change the original, and when run, the result is always the same

const purePop = (array) => [...array].pop()

console.log("Purepop!")

console.log(someArray, purePop(someArray))
console.log(someArray, purePop(someArray))
console.log(someArray, purePop(someArray))
console.log(someArray, purePop(someArray))
console.log(someArray, purePop(someArray))