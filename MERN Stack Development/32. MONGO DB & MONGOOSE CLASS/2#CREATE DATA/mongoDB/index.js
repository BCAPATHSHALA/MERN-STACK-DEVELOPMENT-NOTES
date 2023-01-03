const mongoose = require("mongoose");
const User = require("./models/User");

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

/* this is not a good practice*/
// const user = new User({
//     email: "anuj@gmail.com",
//     password: "1234",
//   });

//   user.save().then(() => {
//     console.log("user added");
//   });

/* this is a good practice to create the new user*/
async function createUser(newUser) {
  const user = new User(newUser); // in memory user document created

  const data = await user.save(); // user saved inside the database
  console.log("user: ", user);
  console.log("data: ", data);
}

createUser({
  email: "devkumar@gmail.com",
  password: "hello",
});
