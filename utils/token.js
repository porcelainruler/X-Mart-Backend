const jwt = require("jsonwebtoken");
const config = require("../config");

const customerController = require("../controller/customer");

const token = {};

token.getToken = async (custId) => {
  let where = {
    id: custId,
    activeFlag: true,
  };
  let attributes = ["id", "username", "userType"];
  let custData = await customerController.getSingleCustomer(where, attributes);

  const options = {
    expiresIn: config.jwtOptions.expiresIn,
    issuer: config.jwtOptions.issuer,
  };

  var token = jwt.sign(custData, getSecret(), options);
  return token;
};

function getSecret() {
  return Buffer.from(config.jwtOptions.secret, "base64");
}

token.validateAccessToken = async (custId) => {
  try {
    // TODO -> Check if custId and activeFlag true entry exists in LoginDetails table
    // Eg -> const loginDetails = await customerController.getCustLoginDetails({ customerId: custId, activeFlag: true });

    // ~~~~~~~~~~~~~~~  Testing (Remove) ~~~~~~~~~~~~~~~
    return true;
    // ~~~~~~~~~~~~~~~  Testing (Remove) ~~~~~~~~~~~~~~~

    if (loginDetails) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

module.exports = token;
