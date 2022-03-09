/*
 *    Komodo
 * ************* */

require('dotenv').config()

const config = {
  rpchost: "localhost", // to put in the .env
  rpcport: 14658, // to put in the .env
  rpcuser: "user1827798912", // to put in the .env
  rpcpassword: "pass32809a99d8f42b9be74357c5f15329eded58e3d1c185df766ff76760053e202420"
};

/*
 *    Server
 * ************* */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  engine
} = require('express-handlebars')

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Handlebars
app.set('view engine', 'hbs')
app.set('views', './views')
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

// Cors (from front-end application)
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET'],
  credentials: true
}))

module.exports = {
  config
}

// Router HTTP
const ROUTER = require('./router')
app.use('/', ROUTER)


const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`Server running on port ${port}`));