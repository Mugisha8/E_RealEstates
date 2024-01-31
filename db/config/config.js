var dotenv = require("dotenv");
dotenv.config();

var config = {
  development: {
    url: process.env.DbC,
    dialect: "postgres",
  },