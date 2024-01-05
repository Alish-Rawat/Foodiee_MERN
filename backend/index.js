const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://foodiee-mern-frontend.vercel.app"],
    methods: ["POST", "GET", "UPDATE"],
    credentials: true,
  })
);

app.use(express.json());

// app.app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-allow-Origin",
//     "https://foodiee-mern-frontend.vercel.app"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-Width, Content-Type,Accept"
//   );
//   next();
// });

mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
