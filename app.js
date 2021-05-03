// env variable
require("dotenv").config();

//modules
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const { errHandler, finalError } = require('./middlewares/responseHandler');
const router = require('./routes');
const app = express();

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

//morgan
app.use(morgan('dev'))


// Routes
app.use(router)


//error handling
app.use((err, req, res, next) => { errHandler(err, res) });
finalError.forEach(handler => app.use(handler));

module.exports = app