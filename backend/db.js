const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const express = require("express");
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

const mongoURI =
  "mongodb+srv://foodiee:1234567890@cluster0.awt0z3t.mongodb.net/foodieemern?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI);

  console.log("connected");

  const data = await mongoose.connection.db
    .collection("food_items")
    .find()
    .toArray();
  const foodCategory = await mongoose.connection.db
    .collection("foodCategory")
    .find()
    .toArray();

  global.food_items = data;
  global.foodCategory = foodCategory;
  // console.log("data", global.food_items);
};

module.exports = mongoDB;
