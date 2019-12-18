const request = require("request");
let bearerToken = "";

const operatorsLogin = (req, res) => {
  request.post(
    {
      url: "https://api-dev.avy.vn/api/v1/operators/login",
      form: {
        phone: "+84378345621",
        password: "123456"
      }
    },
    (err, response, body) => {
      bearerToken = JSON.parse(body).data.token;
      res.status(200).send(JSON.parse(body));
    }
  );
};

const operatorsMe = (req, res) => {
  request.get(
    {
      url: "https://api-dev.avy.vn/api/v1/operators/me",
      auth: {
        bearer: bearerToken
      }
    },
    (error, response, body) => {
      res.status(200).send(JSON.parse(body));
    }
  );
};

module.exports = {
  operatorsLogin,
  operatorsMe
};
