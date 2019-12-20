const requestPromise = require("request-promise");

let apis = (method, url, data = null, token = null, formData = null) => {
  return requestPromise({
    method,
    uri: url,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "multipart/form-data"
    },
    form: data,
    formData,
    json: true
  });
};

module.exports = {
  apis
};
