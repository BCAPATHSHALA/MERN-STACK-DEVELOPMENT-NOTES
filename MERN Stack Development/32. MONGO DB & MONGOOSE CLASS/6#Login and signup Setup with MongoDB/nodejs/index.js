const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();
app.use(express.json());

const dbConnect = require("./dbConnect");

const mainRouter = require("./routes/");

// Global Middleware for each API
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toDateString());
  next();
});

app.use("/api", mainRouter);

const PORT = process.env.PORT;
dbConnect();

app.listen(PORT, () => {
  console.log("started listingng on th port: ", PORT);
});
