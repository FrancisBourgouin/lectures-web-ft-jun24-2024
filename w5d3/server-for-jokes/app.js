const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { connectToDB } = require("./db/dbHelpers");
const { fetchAllJokes, fetchJokeById, insertJoke } = require("./db/jokeHelpers");
const { fetchAllAuthors } = require("./db/authorHelpers");
const app = express();
connectToDB()
  .then(() => console.log("DB connection is ready"))
  .catch(() => console.log("DB connection is problematic"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// const fakeJokes = [
//   {joke:"joke"}
//   {joke:"joke"}
//   {joke:"joke"}
//   {joke:"joke"}
// ]

app.get("/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => {
      const templateVars = { jokes };
      return res.render("jokes", templateVars);
    })
    .catch((err) => {
      console.log(err);
      return res.send("OH NO");
    });
});

app.get("/jokes/new", (req, res) => {
  fetchAllAuthors()
    .then((authors) => {
      const templateVars = { authors };
      return res.render("new-joke", templateVars);
    })
    .catch((err) => {
      console.log(err);
      return res.send("OH NO");
    });
});

app.post("/jokes", (req, res) => {
  const { question, answer, rating, author_id } = req.body;

  insertJoke(question, answer, rating, author_id)
    .then((joke) => {
      console.log("Inserted joke:", joke);
      return res.redirect("/jokes");
    })
    .catch((err) => {
      console.log(err);
      return res.send("OH NO");
    });
});

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => {
      return res.json(jokes);
    })
    .catch((err) => {
      console.log(err);
      return res.send("OH NO");
    });
});

app.get("/api/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id)
    .then((joke) => {
      return res.json(joke);
    })
    .catch((err) => {
      console.log(err);
      return res.send("OH NO");
    });
});

app.get("/api/authors", (req, res) => {
  res.json("ALL THE AUTHORS HERE");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
