const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const topicRoute = require("./routes/topics");
const categoryRoute = require("./routes/category");

const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/topic", topicRoute);
app.use("/api/category", categoryRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
