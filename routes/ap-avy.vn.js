const express = require("express");
const router = express.Router();

const {
  operatorsLogin,
  operatorsMe,
  operatorsMeFiles
} = require("./../controllers/op-avy.vn");

router.post("/login", operatorsLogin);
router.get("/me", operatorsMe);
router.post("/me/files", operatorsMeFiles);

module.exports = router;
