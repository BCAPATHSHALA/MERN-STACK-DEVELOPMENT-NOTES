const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoURL = process.env.mongoURL;

const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(
      mongoURL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongodb connected");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
