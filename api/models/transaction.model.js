import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      unique: true,
    },
    isFeatured: {
  type: Boolean,
  default: false,
},

    year: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
    },
    description:{
      type:String,
    },
    representingPic: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    party2Pic: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    assetPic: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    mainPic: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    sector: {
      type: String,
     
    },
    type_of_deal: {
      type: String,
      
    },
    representing: {
      type: String,
    },
    party2: {
      type: String,
    },
    asset: {
      type: String,
      
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;