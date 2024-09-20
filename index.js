const app = require("./src/app");
const connectDb = require("./src/db/connectDb");
require("dotenv").config();
const port = Number(process.env.PORT) || 4000;

const main = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

main();
