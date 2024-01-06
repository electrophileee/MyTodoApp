const mongoose = require("mongoose");
const mongoURI =
'mongodb+srv://abhisahu:todo1908todo@cluster0.pijfubd.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;

