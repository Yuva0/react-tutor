const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    idCategory: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      unique: true,
    },
    topics: {
      type: [String],
      default: [],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema, "Categories");