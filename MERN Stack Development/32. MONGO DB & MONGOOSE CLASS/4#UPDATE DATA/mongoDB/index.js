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

/* this is a good practice to create the new user*/
async function createUser(newUser) {
  const user = new User(newUser); // in memory user document created

  const data = await user.save(); // user saved inside the database
  console.log("user: ", user);
  console.log("data: ", data);
}

// createUser({
//   email: "shivam@gmail.com",
//   password: "hello",
//   marks: 49,
// });

/* this is a good practice to find user from the atlas mangodb */
async function findUser() {
  //   const users = await User.find();
  //   const users = await User.findById("63a6a2b690982e804122d5d8");
  //   const users = await User.findOne({ email: "anuj@gmail.com" });
  //   const users = await User.find({ email });
  //   const users = await User.find({ marks: { $gte: 82 } });
  const users = await User.find({ email: { $regex: "nu" } });
  console.log(users);
}

// findUser();

/* this is a good practice to update user from the atlas mangodb */
async function updateMarks(userId, marks) {
  const user = await User.findById(userId);
  user.marks = marks;
  const updatedUser = await user.save();
  console.log(updatedUser);
}

updateMarks("63a6a6fe6eb2c26fa6a30588", 56);
