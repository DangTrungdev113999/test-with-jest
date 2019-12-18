const express = require("express");
const router = express.Router();

const { operatorsLogin, operatorsMe } = require("./../controllers/op-avy.vn");

router.post("/login", operatorsLogin);
router.get("/me", operatorsMe);

module.exports = router;
