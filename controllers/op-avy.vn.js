const fs = require("fs");
const path = require("path");

const { apis } = require("./../services/index");
const { OP_AVY_URL } = require("./../constants/index");
let bearerToken = "";

const operatorsLogin = (req, res) => {
  const data = {
    phone: "+84378345621",
    password: "123456"
  };
  apis("POST", `${OP_AVY_URL}/operators/login`, data)
    .then((response) => {
      bearerToken = response.data.token;
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const operatorsMe = (req, res) => {
  apis("GET", `${OP_AVY_URL}/operators/me`, null, bearerToken)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const operatorsMeFiles = (req, res) => {
  const formData = {
    file: {
      value: fs.createReadStream(
        path.join(__dirname, "./../assets/images/imageTest.jpg")
      ),
      options: {
        filename: "imageTest.jpg",
        contentType: "image/jpg"
      }
    }
  };

  apis("POST", `${OP_AVY_URL}/operators/me/files`, null, bearerToken, formData)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  operatorsLogin,
  operatorsMe,
  operatorsMeFiles
};
