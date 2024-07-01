const listOfNumbers = [1,2,3,4,4,5,6,7,7,7]

// for(let i = 0; i < 999999; i++){
//   listOfNumbers.push(Math.random() * i)
// }

// const doSomething = function(){
//   return listOfNumbers.sort((a,b) => a - b)[0]
// }

// const doSomething = function(){
//   let smallestBuffer = listOfNumbers[0]

//   for(const number of listOfNumbers){
//     if(smallestBuffer > number){
//       smallestBuffer = number
//     }
//   }

//   return smallestBuffer
// }

const doSomething = function(){
  //  IMPLEMENT ME!
  const repetitionBuffer = {}
  let biggestValue = null
  let biggestRepetition = null

  for(const number of listOfNumbers){
    repetitionBuffer[number] = 0
  }
  
  for(const number of listOfNumbers){
    repetitionBuffer[number]++
    }
    const numberRepetitionPairs = Object.entries(repetitionBuffer)
    console.log(numberRepetitionPairs)

  biggestValue = numberRepetitionPairs[0][0]
  biggestRepetition = numberRepetitionPairs[0][1]

  for(const pair of numberRepetitionPairs){ //[[6,2], [0,1]]
    if(biggestRepetition < pair[1]){
      console.log(pair)
      biggestValue = pair[0]
      biggestRepetition = pair[1]
    }
  }

  return biggestValue
}


const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);