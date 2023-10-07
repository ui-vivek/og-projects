const mongoose = require("mongoose");

const TestSchema = mongoose.Schema(
  {
    User: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TestDB = mongoose.model("TestSmoothe", TestSchema);

module.exports = TestDB;
