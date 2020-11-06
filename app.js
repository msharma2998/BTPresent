const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  authRouter = require("./src/router/authRouter");

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/btpresent", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

app.listen(PORT, function () {
  console.log("server has started");
});
