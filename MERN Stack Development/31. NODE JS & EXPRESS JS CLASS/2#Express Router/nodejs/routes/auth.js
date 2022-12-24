const router = require("express").Router();


//URL TO ACCESS: http://localhost:4000/auth/login
router.post("/login", (req, res) => {
  res.send("this is for login");
});


//URL TO ACCESS: http://localhost:4000/auth/signup
router.post("/signup", (req, res) => {
    res.send("this is for signup");
  });

module.exports = router;
