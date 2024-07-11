// Require external resources
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")
const dotenv = require("dotenv");
const users = require("./data/users");
const { authenticateUser, createUser } = require("./helpers/userHelpers");
const bcrypt = require("bcryptjs")

// Initialize my server

dotenv.config(); // Read the .env file and store the info inside process.env
const app = express();
const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
const salt = bcrypt.genSaltSync(10)


users["periodic@table.com"].password = bcrypt.hashSync(process.env.USER1_PASSWORD, salt)
users["pontiac@bandit.com"].password = bcrypt.hashSync(process.env.USER2_PASSWORD, salt)

// Set up the middlewares

// Read from static files (css files, js files, etc)
app.use(express.static("public"));
// Parse the content of cookie string to a cookie object (Parsing/Rendering/Interpreting)
app.use(cookieParser());
// Encrypt Decrypt a session cookie
app.use(cookieSession({
  name:"session",
  keys:[process.env.SESSION_KEY1, process.env.SESSION_KEY2]
}))
// Parse the content of the form body to a body object
app.use(express.urlencoded({ extended: false }));
// Enforce a whitelist on our routes

// Set up the routes

// Routes where we see content (GET)

// Home route
app.get("/", (req, res) => {
  return res.render("home");
});

// Login route
app.get("/login", (req, res) => {
  return res.render("login");
});

// Register route
app.get("/register", (req, res) => {
  return res.render("register");
});

// Secret route
app.get("/secret", (req, res) => {
  const { email } = req.session;
  const user = users[email];

  const templateVars = { user };
  return res.render("secret", templateVars);
});

app.get("/secret/:userId", (req, res) => {
  return res.render("secret");
});

app.get("/api/users", (req, res) => {
  return res.json(users)
})

// Routes where we do an action (POST)

// Authenticate a user
app.post("/login", (req, res) => {
  // Something here
  const { email, password } = req.body;

  const { error, user } = authenticateUser(email, password, users);

  if (error) {
    console.log(error);
    return res.redirect("/login");
  }

  // res.cookie("email", user.email);
  req.session.email = user.email
  return res.redirect("/secret");
});

// Create a user
app.post("/register", (req, res) => {
  // Something here
  const {email, password, secret} = req.body

  const {error, user} = createUser(email, password, secret, salt, users)

  if(error){
    console.log(error)
    return res.redirect("/register")
  }

  req.session.email = user.email
  return res.redirect("/secret")
});

// Logout a user
// We would probably use the DELETE method
app.post("/logout", (req, res) => {
  // Something here
});

// Activate the server

app.listen(port, () => {
  console.log("Server is ready and listening on port:", port);
});
