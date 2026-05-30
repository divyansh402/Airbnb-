const mongoose = require("mongoose");
const initData = require("./data.js");         // renamed to initData
const Listing = require("../Models/listing.js"); // fixed: was "Listings"

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj,owner:"69c600678c1c55b9d185580a"}));
  await Listing.insertMany(initData.data); // now initData.data matches your import
  console.log("data was initialized");
  // console.log(initData.data);        // ✅ prints all data to terminal
  // mongoose.connection.close();       // ✅ closes connection after seeding
};

initDB();