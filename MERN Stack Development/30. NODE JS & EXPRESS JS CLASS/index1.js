const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log("user was called");
  //res.send("hello user😎");
  res.send({
    name: "manoj",
    age: 23,
  });
});

app.get("/", (req, res) => {
  //   res.send("server is now working🤠");
  //   res.sendFile(__dirname + "/index.html");
  res.json({
    success: true,
  });
});

app.use(express.json()); // middleware
app.post("/user", (req, res) => {
  console.log(req.body);

  res.json({
    name: "manoj",
    age: 23,
    multiply: req.body.a * req.body.b,
  });
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
