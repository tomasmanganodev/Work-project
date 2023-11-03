const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
const routesUser = require('./routes/users');

app.use(bodyParser.json());
app.use(cors());
/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}); */
app.use("/user", routesUser);

app.listen(3333);