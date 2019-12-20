const express = require("express");
const router = express.Router();
const {
  login,
  borrowersLoansFee,
  idCardFrontImage
} = require("./../controllers/app_borrwoer");

router.post("/login", login);
router.get("/borrowers/loans/fee", borrowersLoansFee);
router.post("/idCardFrontImage", idCardFrontImage);

module.exports = router;
