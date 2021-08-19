const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const greetings = require("./routers/greetings");

dotenv.config();

app.use(logging);

const app = express();
const morgan = require("morgan"); // with the rest of your imports

app.use(morgan("dev")); // where we previously used 'logging'


const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

const mongoose = require('mongoose')
const express = require("express");
const app = express();

const db = mongoose.connection


app.listen(4040, () => console.log("Listening on port 4040"));

app.route("/greetings/:name").get((request, response) => {
  const name = request.params.name;
  response.status(418).json({ message: `Hello ${name}` });
});

const PORT = process.env.PORT || 4040; // we use || to provide a default value


