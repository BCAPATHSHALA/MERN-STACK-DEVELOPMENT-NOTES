const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRouter = require("./routers/authRouter");
const postRouter = require("./routers/postsRouter");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT || 4501;

const dbConnection = require("./dbConnect");
dbConnection();

//Middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true, 
    origin: "http://localhost:3000", // frontend host url
  })
);

//API
app.use("/auth", authRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
