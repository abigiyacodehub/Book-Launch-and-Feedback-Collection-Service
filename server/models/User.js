const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    age: {
      type: Number,
      min: 13,
      max: 120
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40
    },
    joinService: {
      type: Boolean,
      default: false
    },
    getBook: {
      type: Boolean,
      default: false
    },
    preferredLanguage: {
      type: String,
      enum: ["en", "am"],
      default: "en"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
