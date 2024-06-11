const app = require("./src/app");
const connectDb = require("./src/db/connectDb");
require("dotenv").config();
const port = Number(process.env.PORT) || 4000;

const main = () => {

  app.listen(port, () => {
    connectDb();
    console.log(`server running on port ${port}`);
  });

};

main();
