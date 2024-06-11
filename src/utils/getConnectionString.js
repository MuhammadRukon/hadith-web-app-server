require("dotenv").config();
const getConnectionString = () => {
  const uri = process.env.DB_URI;
  let conenctionURI = "";
  let username = "";
  let password = "";
  if (process.env.ENVIRONMENT === "production") {
    username = process.env.DB_USERNAME_PROD;
    password = process.env.DB_PASSWORD_PROD;
  } else {
    username = process.env.DB_USERNAME_DEV;
    password = process.env.DB_PASSWORD_DEV;
  }

  conenctionURI = uri
    .replace("<username>", username)
    .replace("<password>", password);
  return conenctionURI;
};

module.exports = getConnectionString;
