import Asset from "../models/asset.model.js";
import cloudinary from '../utils/cloudinary.js'; 
import fs from "fs";

// ✅ Upload Asset with PDF
export const createAsset = async (req, res) => {
  try {
    // PDF uploaded via Multer middleware
    const pdfFile = req.file.path;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(pdfFile, {
      resource_type: "raw", // IMPORTANT for PDFs
      folder: "assets/pdfs", // optional: keeps files organized in Cloudinary
    });

    // Save in MongoDB
    const newAsset = new Asset({
      heading: req.body.heading,
      year: req.body.year,
      category: req.body.category,
      pdfLink: uploadResult.secure_url,
    });

    await newAsset.save();

    // Delete temp file
    fs.unlinkSync(pdfFile);

    res.status(201).json({ message: "Asset created successfully", newAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading PDF", error });
  }
};

// ✅ Get All Assets
export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching assets", error });
  }
};
