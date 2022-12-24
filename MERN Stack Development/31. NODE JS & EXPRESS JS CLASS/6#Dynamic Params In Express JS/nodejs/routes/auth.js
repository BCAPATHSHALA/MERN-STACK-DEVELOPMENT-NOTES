const AuthController = require("../controllers/auth");

const router = require("express").Router();

//URL TO ACCESS: http://localhost:4000/api/auth/login
router.post("/login", AuthController.loginController);

//URL TO ACCESS: http://localhost:4000/api/auth/signup
router.post("/signup", AuthController.signupController);

//URL TO ACCESS: http://localhost:4000/api/auth/user/:id
router.get("/user/:id", AuthController.getUserController);

module.exports = router;
