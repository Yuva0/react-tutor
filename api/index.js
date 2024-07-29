const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const topicRoute = require("./routes/topic");
const topicReferenceRoute = require("./routes/topic-reference");
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
app.use("/api/topic-reference", topicReferenceRoute);
app.use("/api/category", categoryRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend is running.");
});
