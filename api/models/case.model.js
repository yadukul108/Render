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
    isInvestment:{
      type:Boolean,
      default:false
    },
    isStrategy:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

caseSchema.index({ createdAt: -1 });
caseSchema.index({ isInvestment: 1, createdAt: -1 });
caseSchema.index({ isStrategy: 1, createdAt: -1 });

const Case = mongoose.model("Case", caseSchema);
export default Case;
