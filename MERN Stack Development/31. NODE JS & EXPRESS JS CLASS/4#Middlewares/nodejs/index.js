const dotenv = require("dotenv");
const e = require("express");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();
app.use(express.json());

const mainRouter = require("./routes/");

// Global Middleware for each API
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toDateString());
  //POST /api/auth/login Fri Dec 23 2022
  // next();
  if (req.body && req.body.name === "Anuj") {
    next();
  } else {
    res.send("Not allowed");
  }
});

app.use("/api", mainRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("started listingng on th port: ", PORT);
});
