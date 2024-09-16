const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddleware = (express, app) => {
  app.use(express.json());
  app.use(cookieParser());
  require("dotenv").config();

  app.use(
    cors({
      origin: [process.env.LOCAL_CLIENT, process.env.REMOTE_CLIENT],
      // origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
};

module.exports = applyMiddleware;
