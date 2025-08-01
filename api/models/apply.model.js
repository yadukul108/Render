import mongoose from 'mongoose';

const applicantSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  email:      { type: String, required: true },
  phone:      { type: String, required: true },
  linkedin:   { type: String },
  resumeName: { type: String },   // original filename
  resumeBuffer: { type: Buffer }, // binary data (≤ 16 MB per Mongo doc)
  appliedAt:  { type: Date, default: Date.now }
});

export default mongoose.model('Applicant', applicantSchema);
