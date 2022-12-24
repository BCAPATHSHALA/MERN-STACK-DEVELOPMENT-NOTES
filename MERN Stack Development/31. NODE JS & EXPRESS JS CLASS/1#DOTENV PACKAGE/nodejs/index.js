const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("started listingng on th port: ", PORT);
});
