const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema(
  {
    title: {
      en: { type: String, required: true, trim: true, maxlength: 160 },
      am: { type: String, trim: true, maxlength: 160 }
    },
    youtubeUrl: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },
    speaker: {
      type: String,
      trim: true,
      maxlength: 120
    },
    publishedAt: {
      type: Date,
      default: Date.now,
      index: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sermon", sermonSchema);
