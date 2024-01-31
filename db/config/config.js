var dotenv = require("dotenv");
dotenv.config();

var config = {
  development: {
    url: process.env.DbC,
    dialect: "postgres",
  },

  test: {
    url: process.env.DbC,
    dialect: "postgres",
  },
  production: {
    url: process.env.DbC,
    dialect: "postgres",
  },
};

// Export the configuration object
module.exports = config;
