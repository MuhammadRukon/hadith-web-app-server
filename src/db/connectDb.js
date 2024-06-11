const mongoose = require("mongoose");
const getConnectionString = require("../utils/getConnectionString");

const connectDb = async () => {
  const uri = getConnectionString();
  await mongoose.connect(uri, { dbName: process.env.DB_NAME });
  console.log(`connected to db : ${process.env.DB_NAME}`);
};

module.exports = connectDb;
