import Asset from "../models/asset.model.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// ✅ Create Asset with PDF Upload
export const createAsset = async (req, res) => {
  try {
    // PDF uploaded via Multer middleware
    const pdfFile = req.file.path;

    // Upload to Cloudinary (PDF must be uploaded as "raw")
    const uploadResult = await cloudinary.uploader.upload(pdfFile, {
      resource_type: "raw",
      folder: "assets/pdfs",
    });

    // Save in MongoDB
    const newAsset = new Asset({
      heading: req.body.heading,
      year: req.body.year,
      category: req.body.category,
      pdfReportLink: uploadResult.secure_url, 
    });

    await newAsset.save();

    // Delete temp file
    fs.unlinkSync(pdfFile);

    res.status(201).json({ success: true,  asset: newAsset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
};

// ✅ Get All Assets
export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 });
    res.status(200).json( assets );
  } catch (error) {
    res.status(500).json({   error: err.message });
  }
};

// ✅ Update Asset
export const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, year, category } = req.body;

    let updateData = { heading, year, category };

    // If a new PDF is uploaded, replace in Cloudinary
    if (req.file) {
      const pdfFile = req.file.path;

      const uploadResult = await cloudinary.uploader.upload(pdfFile, {
        resource_type: "raw",
        folder: "assets/pdfs",
      });

      updateData.pdfReportLink = uploadResult.secure_url;

      fs.unlinkSync(pdfFile); // delete temp file
    }

    const updatedAsset = await Asset.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedAsset) {
      return res.status(404).json({ success: false, message: "Asset not found" });
    }

    res.status(200).json({ success: true, asset: updatedAsset });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Delete Asset
export const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAsset = await Asset.findByIdAndDelete(id);

    if (!deletedAsset) {
      return res.status(404).json({ success: false, message: "Asset not found" });
    }

    res.status(200).json({ success: true, message: "Asset deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
