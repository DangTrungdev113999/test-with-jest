const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("ahihi");
});

module.exports = router;
