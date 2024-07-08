// Basic express server w/ EJS
const PORT = 3000;

const user1 = {
  id:1,
  name: "(🐔) - Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  id:2,
  name: "(🎩) - Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  1: user1,
  2: user2,
};

const express = require("express");

const server = express(); // similar to what http.createServer()
server.set("view engine", "ejs");

// Gives access to files in the public folder
server.use(express.static("./public"));
server.use(express.urlencoded())

// Log the path request + time of request
// Simple Logger Middleware
server.use((req, res, next) => {
  console.log(`Client asked for ${req.path} at time ${new Date().toLocaleTimeString()}`);

  return next(); // Move along and try the routes
});

// When server gets a "GET" request for "/" do the following:
server.get("/", (req, res) => {
  return res.send("Hello!");
});

server.get("/users", (req, res) => {
  const userList = Object.values(users);
  const templateVars = { users: userList };

  return res.render("users", templateVars);
});

server.get("/users/new", (req, res) => {

  return res.render("new-user")
})

server.post("/users", (req,res) => {
  const formData = req.body
  console.log(formData)

  const randomId = Object.keys(users).length + 1

  users[randomId] = {
    name:formData.name,
    email:formData.email,
    isAdmin: formData.isAdmin === "on"
  }

  return res.redirect("/users/new")
})

// When server gets a "GET" request for /users/WHATEVERHERE, do the following:
// We can templating engines to generate HTML with custom data
server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users[userId];

  if (!user) {
    return res.status(404).send("USER NOT FOUND");
  }

  const templateVars = { user: user };
  return res.render("user", templateVars); // Render the template called "user.ejs" in the views folder using the data from templateVars
});



// If we make it to the end of all routes, redirect to the 404 page!
server.use((req, res, next) => {
  console.log("Client requested a page that doesn't exist!");

  return res.redirect("/404.html");
});

server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}! \nProcess started at: ${new Date().toLocaleString()}`
  );
});
