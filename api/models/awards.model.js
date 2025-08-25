import mongoose from "mongoose";

const awardSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    awardimageURL: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Award = mongoose.model("Award", awardSchema);
export default Award;
