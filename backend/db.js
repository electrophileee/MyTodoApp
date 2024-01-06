require('dotenv').config()
// console.log(process.env)

const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect(process.env.mongoURI, () => {
    console.log("Database Connected successfully");
  });
};

module.exports = connectToMongo;

