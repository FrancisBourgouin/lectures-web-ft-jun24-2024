const express = require("express"); // Requiring the express package to build a server
const cookieParser = require("cookie-parser"); // Requiring the cookie parser package

const thieves = require("./data/thiefData");
const {
  getThiefById,
  authenticateThief,
  getThiefByEmail,
  createThief,
} = require("./helpers/thiefHelpers");

const app = express(); // Generate a server using the express() function
const port = 8080; // specifying the port my server will listen to

app.use(express.static("public")); // app.use is to listen to all the routes
app.set("view engine", "ejs"); // We set what we want to use to render the templates

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// req.params => Parameters of the url /urls/:short_url => short_url is a param inside the params object
// req.params => {short_url: ""}

// req.body => "BODY" of the request, 99% of time, it's the content of a form
// req.body will exist if parsed by a middleware
// form with two inputs, email and password => {email:"", password:""}

app.get("/", (req, res) => {
  // GET ME THE COOKIES!
  console.log(req.cookies);
  // const email = req.cookies.email
  const { email } = req.cookies;

  const { error, thief } = getThiefByEmail(thieves, email);

  if (error) {
    // No thief (logged out)
    const templateVars = { thief: null };
    return res.render("index", templateVars);
  }

  // With thief (logged in)
  const templateVars = { thief };
  return res.render("index", templateVars);
});

app.get("/register", (req, res) => {
  const templateVars = {error: req.cookies.error}
  res.clearCookie("error")

  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {
  // const name = req.body.name
  // const email = req.body.email
  // const password = req.body.password
  // const imagePath = req.body.imagePath
  // const {name, email, password, imagePath} = req.body

  const { error, thief } = createThief(thieves, req.body);

  if(error){
    console.log(error)
    res.cookie("error", error)
    return res.redirect("/register")
  }

  res.cookie("email", thief.email)
  return res.redirect("/")
});

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password  = req.body.password
  const { email, password } = req.body;

  const { error, thief } = authenticateThief(thieves, email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  console.log("success!", thief);
  res.cookie("email", thief.email);
  return res.redirect("/");
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

app.get("/api/thieves", (req, res) => {
  return res.json(thieves);
});

app.get("/api/thieves/:thiefId", (req, res) => {
  // Extract the required params
  const thiefId = req.params.thiefId;

  // Find the thief with helpers
  const { error, thief } = getThiefById(thieves, thiefId);

  // We handle the error case
  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  // We return the info
  return res.json(thief);
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
