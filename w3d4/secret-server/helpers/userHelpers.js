const bcrypt = require("bcryptjs")

const authenticateUser = (email, password, users) => {
  // Either an error message or the user
  // I should return both!
  // Can only return one thing, group them together

  const output = { error: null, user: null };

  if(!users[email]){
    output.error = "User doesn't exist"
  }

  // if(users[email].password !== password){
  const isSamePassword = bcrypt.compareSync(password, users[email].password)
  if(!isSamePassword){
    output.error = "User password doesn't match"
  }

  if(output.error === null){
    output.user = users[email]
  }

  return output
};

const createUser = (email, password, secret, salt, users) => {
  const newUser = {
    email,
    password:bcrypt.hashSync(password, salt),
    secret,
    id:Object.keys(users).length + 1
  }

  users[email] = newUser

  return {error:null, user:newUser}
}


module.exports = {authenticateUser, createUser}