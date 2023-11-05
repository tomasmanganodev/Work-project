const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
const routesUser = require('./routes/users');

app.use(bodyParser.json());

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the HTTP methods you want to allow
  allowedHeaders: 'Content-Type,Authorization', // Specify the custom headers you want to allow
};
app.use(cors(corsOptions));
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