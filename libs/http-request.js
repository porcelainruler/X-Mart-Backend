var requestPromise = require("request-promise");

module.exports.getApiRequest = async (url) => {
  try {
    var options = {
      method: "GET",
      headers: null,
      url: url,
      json: true,
    };

    const response = await requestPromise(options);
    return response;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports.postApiRequest = async (url, data, headers) => {
  try {
    var options = {
      method: "POST",
      headers: headers,
      url: url,
      body: data,
      json: true,
    };

    const response = await requestPromise(options);
    return response;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports.postDocRequest = async (url, formData, headers) => {
  try {
    var options = {
      method: "POST",
      headers: headers,
      url: url,
      formData: formData,
    };

    const response = await requestPromise(options);

    return JSON.parse(response);
  } catch (err) {
    try {
      return JSON.parse(err.error);
    } catch (error) {
      return err;
    }
  }
};
