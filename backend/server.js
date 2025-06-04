require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//* Middelwares
app.use(express.json());
