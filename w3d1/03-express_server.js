// Basic express server w/o EJS
const PORT = 3000

const user1 = {
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  "1": user1,
  "2": user2,
};


const express = require("express");

const server = express() // similar to what http.createServer()

// Gives access to files in the public folder
server.use(express.static("./public"))


// Log the path request + time of request
// Simple Logger Middleware
server.use((req, res, next) => {
  console.log(`Client asked for ${req.path} at time ${new Date().toLocaleTimeString()}`)

  return next() // Move along and try the routes
})

// When server gets a "GET" request for "/" do the following:
server.get("/", (req, res) => {
  return res.send("Hello!")
})

server.get("/users", (req, res) => {
  return res.json(users)
})

// When server gets a "GET" request for /users/WHATEVERHERE, do the following:
server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId

  if(!users[userId]){
    return res.status(404).send("USER NOT FOUND")
  }

  return res.json(users[userId])
})


// If we make it to the end of all routes, redirect to the 404 page!
server.use((req, res, next) => {
  console.log("Client requested a page that doesn't exist!")

  return res.redirect("/404.html")
})



server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}! \nProcess started at: ${new Date().toLocaleString()}`)
})