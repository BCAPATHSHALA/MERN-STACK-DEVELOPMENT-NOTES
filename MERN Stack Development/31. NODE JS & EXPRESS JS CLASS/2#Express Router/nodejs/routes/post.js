const router = require("express").Router();

//URL TO ACCESS: http://localhost:4000/post/
router.get("/", (req, res) => {
  res.json({
    id: "2323",
    title: "hello",
    imgUrl: "imageURL...",
  });
});


//URL TO ACCESS: http://localhost:4000/post/all
router.get("/all", (req, res) => {
  res.json({
    data: [
      {
        title: "hello",
      },
      {
        title: "hi",
      },
    ],
  });
});

module.exports = router;
