
const signupController = async (req, res) => {
  console.log("signupController called");
  res.send("this is for signupController");
};

const loginController = async (req, res) => {
  console.log("loginController called");
  res.send("this is for loginController");
};

module.exports = { signupController, loginController };
