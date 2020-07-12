/*
  Some code taken from boilerplate
*/


const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// Load environmental variables from .env file
require("dotenv").config();

// Utilities;
const createLocalDatabase = require("./utilities/createLocalDatabase");
const seedDatabase = require("./utilities/seedDatabase");

// Database
const db = require('./database/database');

// A helper function to sync our database;
const syncDatabase = () => {
  if (process.env.NODE_ENV === "production") {
    db.sync();
  } else {
    console.log("As a reminder, the forced synchronization option is on");
    db.sync({ force: true })
      .then(() => seedDatabase())
      .catch((err) => {
        if (err.name === "SequelizeConnectionError") {
          createLocalDatabase();
          seedDatabase();
        } else {
          console.log(err);
        }
      });
  }
};

const app = express();

// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  app.use(helmet());
  app.use(logger("dev"));
  // handle request data:
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());

  // Routes
  app.use('/campuses', require('./routes/campus.controller'));
  app.use('/students', require('./routes/student.controller'));

  // Error handling;
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

 // Main function declaration;
  const bootApp = async () => {
  await syncDatabase();
  await configureApp();
};

  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });

// Main function invocation;
bootApp();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));