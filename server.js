
// requiring and configuring dotenv to access sensitive data using process.env
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')
const { engine } = require('express-handlebars');
const path = require('path')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')

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

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.set('views', './app/views');

app.use(passport.initialize());
require('./app/config/passport')

// swagger ui setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "Api documentation"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
  },
  apis: ['../app/controllers/*.js']
}

const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))


// All apis
app.use('/', require('./app/routes/index'))


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


