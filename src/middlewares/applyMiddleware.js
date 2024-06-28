const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddleware = (express, app) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [process.env.LOCAL_CLIENT, process.env.REMOVE_CLIENT],
      credentials: true,
    })
  );
  require("dotenv").config();
};

module.exports = applyMiddleware;
