const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
// const express = require("express");
// const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-allow-Origin",
    "https://foodiee-mern-frontend.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type,Accept"
  );
  next();
});

let data = [];
let foodCategory = [];

const mongoURI =
  "mongodb+srv://foodiee:1234567890@cluster0.awt0z3t.mongodb.net/foodieemern?retryWrites=true&w=majority";

const mongoDB = async () => {
  if (data.length === 0 && foodCategory.length === 0) {
    await mongoose.connect(mongoURI);

    // setTimeout(async () => {
    console.log("connected");
    data = await mongoose.connection.db
      .collection("food_items")
      .find()
      .toArray();
    foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find()
      .toArray();
    // global.food_items = data;
    // global.foodCategory = foodCategory;
    // }, 5000);
    // console.log("data", global.food_items);
  }

  return { data, foodCategory };
};

router.get("/fooddata", async (req, res) => {
  let { data, foodCategory } = await mongoDB();

  try {
    res.send([data, foodCategory]);
    // console.log(global.food_items, global.foodCategory);
  } catch (error) {
    console.error(error.message);
    res.send("server Error");
  }
});
// mongoDB();

module.exports = router;
// module.exports = mongoDB;
