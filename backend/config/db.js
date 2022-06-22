//this file is responsible for connection with the database
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected:", conn.connection.host);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    process.exit();
  }
};
module.exports = connectDB;
