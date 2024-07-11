const authenticateUser = (email, password, users) => {
  // Either an error message or the user
  // I should return both!
  // Can only return one thing, group them together

  const output = { error: null, user: null };

  if(!users[email]){
    output.error = "User doesn't exist"
  }

  if(users[email].password !== password){
    output.error = "User password doesn't match"
  }

  if(output.error === null){
    output.user = users[email]
  }

  return output
};


module.exports = {authenticateUser}