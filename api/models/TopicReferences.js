const mongoose = require("mongoose");

const TopicReferencesSchema = new mongoose.Schema(
  {
    idTopic: {
      type: String,
      required: true,
      unique: true,
    },
    references: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TopicReferences", TopicReferencesSchema, "TopicReferences");