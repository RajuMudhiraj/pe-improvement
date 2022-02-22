
// requiring and configuring dotenv to access sensitive data using process.env
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const checkAuth = require('./app/middlewares/check-auth')
const checkAdmin = require('./app/middlewares/check-admin')
const passport = require('passport')

// Connecting to mongodb atlas
const mongoose = require('mongoose')
try {

  mongoose.connect('mongodb://localhost:27017/passport-jwt', () => console.log("Connected to local mongodb"));
}
catch (err) {
  console.log(err + ' Couldn\'t connect to database')
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize());
require('./app/config/passport')

// home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Todo backend api." });
});

// sign up api
app.use('/sign-up', require('./app/routes/signUp'));
app.use('/sign-in', require('./app/routes/signIn'));

// Todos api
app.use('/todo', require('./app/routes/todo'));

// Todos api for admin
app.use('/todoAdmin', require('./app/routes/todoAdmin'));

// Creating an error and passing through next() if requested router not found
app.use((req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
})

// Sending error message to client
app.use((error, req, res, next) => {
  console.log(error)
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error while running server")
  }
  console.log(`Server is running on port ${PORT}.`);
});


