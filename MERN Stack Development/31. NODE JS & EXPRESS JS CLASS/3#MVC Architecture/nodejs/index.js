const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();

const mainRouter = require("./routes/");
app.use("/api", mainRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("started listingng on th port: ", PORT);
});
