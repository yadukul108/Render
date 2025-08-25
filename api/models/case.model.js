import mongoose from "mongoose";
const caseSchema = new mongoose.Schema(
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
    caseImage: {
      type: String,
    },
    description:{
      type:String,
    },
    pdfLink: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", caseSchema);
export default Case;
