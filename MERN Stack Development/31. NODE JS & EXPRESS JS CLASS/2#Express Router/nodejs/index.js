const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const app = express();

const mainRouter = require("./routes/");
app.use("/", mainRouter);

// const postRouter = require("./routes/post");
// app.use("/post", postRouter);

// const authRouter = require("./routes/auth");
// app.use("/auth", authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("started listingng on th port: ", PORT);
});
