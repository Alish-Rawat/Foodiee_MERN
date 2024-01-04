const mongoose = require("mongoose");
var Schema = mongoose.Schema;

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
