const mongoose = require("mongoose");
const User = require("./models/User");

module.exports = () => {
  const mongoUri =
    "mongodb+srv://manoj:<pw>@cluster0.ophpfue.mongodb.net/?retryWrites=true&w=majority";

  try {
    mongoose.connect(
      mongoUri,
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
  }
};
