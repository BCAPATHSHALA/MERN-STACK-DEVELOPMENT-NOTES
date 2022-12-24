const { loginController, signupController } = require("../controllers/auth");

const router = require("express").Router();

//URL TO ACCESS: http://localhost:4000/api/auth/login
router.post("/login", loginController);

//URL TO ACCESS: http://localhost:4000/api/auth/signup
router.post("/signup", signupController);

module.exports = router;
