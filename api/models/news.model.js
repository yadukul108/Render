import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    externalLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

const News = mongoose.model("News", NewsSchema);

export default News;
