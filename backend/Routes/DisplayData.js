const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
    // console.log(global.food_items, global.foodCategory);
  } catch (error) {
    console.error(error.message);
    res.send("server Error");
  }
});

module.exports = router;
