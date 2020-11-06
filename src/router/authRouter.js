const router = require("express").Router();

router.post("/login", (req, res) => {
  console.log("req made");
});

module.exports = router;
