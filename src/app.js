import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRouter from "./router/authRouter";
import infoRouter from "./router/infoRouter";

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/info", infoRouter);

const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/btpresent", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we're connected!");
});

app.listen(PORT, () => {
  console.log("server has started");
});
