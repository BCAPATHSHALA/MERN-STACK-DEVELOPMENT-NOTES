const User = require("../models/User");

const signupController = async (req, res) => {
  console.log("signupController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }

  // const id = Math.floor(Math.random() * 1000);
  // users.push({
  //   id,
  //   email,
  //   password,
  // });

  //check if the user email is already present or not
  const user = await User.findOne({ email });
  if (user) {
    res.status(200).send("Email already registered");
    return;
  }

  const newUser = User({ email, password });
  await newUser.save();

  res.status(200).json(newUser);
};

const loginController = async (req, res) => {
  console.log("loginController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }

  // const user = users.find((item) => item.email === email);
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(401).send("Incorrect password");
    return;
  }

  res.status(200).json({
    email: user.email,
  });
};

//// DYnamic data
const getUserController = (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(403).send("Id is required");
    return;
  }

  const user = users.find((item) => item.id === id);

  res.status(200).json(user);
};

module.exports = { signupController, loginController, getUserController };
