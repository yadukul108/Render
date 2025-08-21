import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      unique: true,
    },
    year: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    pdfLink: {
      type: String, // Cloudinary secure URL
      required: true,
    },
  },
  { timestamps: true }
);

const Asset = mongoose.model("Asset", assetSchema);
export default Asset;
