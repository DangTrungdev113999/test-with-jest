const fs = require("fs");
const path = require("path");

const { APP_BORROWER_URL, defaultLoan } = require("./../constants/index");
const { apis } = require("./../services/index");

let token = "";

const login = (req, res) => {
  const data = {
    phone: "+84328579282",
    password: "123456"
  };

  apis("POST", `${APP_BORROWER_URL}/login`, data)
    .then((response) => {
      token = response.data.token;
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const borrowersLoansFee = (req, res) => {
  const amount = 10000000;
  const duration = 120;

  apis(
    "GET",
    `${APP_BORROWER_URL}/borrowers/loans/fee?amount=${amount}&duration=${duration}`,
    token
  )
    .then((response) => {
      const { insuranceFee, monthlyPayment } = response.data;
      defaultLoan.amount = amount;
      defaultLoan.duration = duration;
      defaultLoan.insuranceFee = insuranceFee;
      defaultLoan.monthlyPayment = monthlyPayment;
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const idCardFrontImage = (req, res) => {
  const formData = {
    file: {
      value: fs.createReadStream(
        path.join(__dirname, "./../assets/images/idCardFrontImage.png")
      ),
      options: {
        filename: "idCardFrontImage.png",
        contentType: "image/png"
      }
    }
  };

  apis("POST", `${APP_BORROWER_URL}/me/files`, null, token, formData)
    .then((response) => {
      console.log(response);
      defaultLoan.idCardFrontImage = response.data;
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = {
  login,
  borrowersLoansFee,
  idCardFrontImage
};
