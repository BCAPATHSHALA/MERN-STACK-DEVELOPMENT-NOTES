const express = require("express");
const app = express();

// random number between 1 and 6
app.get("/randomnum", (req, res) => {
  res.send({
    number: Math.floor(Math.random() * 6) + 1,
  });
});

// sum of n natural number
app.use(express.json());
app.post("/sum", (req, res) => {
  const n = req.body.num;
  let result = 0;

  function sum(n) {
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }

  res.json({
    sum: sum(n),
  });
});

app.listen(4001, () => {
  console.log("listing on the port: 4001");
});
