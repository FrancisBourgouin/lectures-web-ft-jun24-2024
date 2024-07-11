const bcrypt = require("bcryptjs")


const somePassword = "Patate yeah oh yeah!"
const anotherPassword = "1234"

const salt = bcrypt.genSaltSync(10)

const result = bcrypt.hashSync(somePassword, salt)
const result2 = bcrypt.hashSync(anotherPassword, salt)
const result3 = bcrypt.hashSync(somePassword, salt)
const result1 = bcrypt.hashSync(anotherPassword, salt)

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)