import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema(
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
    Description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Newletter = mongoose.model('Newsletter', newsletterSchema);

export default Newletter;