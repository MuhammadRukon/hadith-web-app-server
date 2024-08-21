const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddleware = (express, app) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: [process.env.REMOTE_CLIENT],
      // origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
  require("dotenv").config();
};

module.exports = applyMiddleware;
