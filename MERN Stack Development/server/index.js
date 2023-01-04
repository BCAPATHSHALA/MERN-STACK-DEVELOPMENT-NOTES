const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT || 4501;

const dbConnection = require("./dbConnect");
dbConnection();

//middleware
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("common"));

const authRouter = require("./routers/authRouter");
app.use("/auth", authRouter);

const postRouter = require("./routers/postsRouter");
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
