import Case from "../models/case.model.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// Create Case
export const createCase = async (req, res) => {
  try {
    let pdfUrl = null;
    let imageUrl = null;

    // Upload PDF if exists
    if (req.files?.pdfLink) {
      const pdfPath = req.files.pdfLink[0].path;
      const pdfUpload = await cloudinary.uploader.upload(pdfPath, {
        resource_type: "raw", // for PDFs
        folder: "case/pdfs",
      });
      pdfUrl = pdfUpload.secure_url;
      fs.unlinkSync(pdfPath);
    }

    // Upload Image if exists
    if (req.files?.caseImage) {
      const imgPath = req.files.caseImage[0].path;
      const imgUpload = await cloudinary.uploader.upload(imgPath, {
        folder: "case/images",
      });
      imageUrl = imgUpload.secure_url;
      fs.unlinkSync(imgPath);
    }

    const newCase = new Case({
      heading: req.body.heading,
      year: req.body.year,
      description:req.body.description,
      isInvestment:req.body.isInvestment,
      isStrategy:req.body.isStrategy,
      caseImage: imageUrl,
      pdfLink: pdfUrl,
    });

    await newCase.save();

    res.status(201).json({ message: "Case Study Uploaded successfully", newCase });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading Case Study", error });
  }
};

// Get all cases
export const getAllCase = async (req, res) => {
  try {
    const cases = await Case.find().sort({ createdAt: -1 });
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching case studies", error });
  }
};

// ✅ Delete case by ID
export const deleteCase = async (req, res) => {
  try {
    const { id } = req.params;

    const foundCase = await Case.findById(id);
    if (!foundCase) {
      return res.status(404).json({ message: "Case not found" });
    }

    // (Optional) Delete files from Cloudinary if you want
    // Extract public_id from secure_url
    if (foundCase.pdfLink) {
      const publicId = foundCase.pdfLink.split("/").slice(-2).join("/").split(".")[0];
      await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
    }
    if (foundCase.caseImage) {
      const publicId = foundCase.caseImage.split("/").slice(-2).join("/").split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    await Case.findByIdAndDelete(id);

    res.status(200).json({ message: "Case deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting case", error });
  }
};

// Update Case by ID
export const updateCase = async (req, res) => {
  try {
    const { id } = req.params;

    let pdfUrl = null;
    let imageUrl = null;

    // Upload new PDF if provided
    if (req.files?.pdfLink) {
      const pdfPath = req.files.pdfLink[0].path;
      const pdfUpload = await cloudinary.uploader.upload(pdfPath, {
        resource_type: "raw",
        folder: "case/pdfs",
      });
      pdfUrl = pdfUpload.secure_url;
      fs.unlinkSync(pdfPath);
    }

    // Upload new Image if provided
    if (req.files?.caseImage) {
      const imgPath = req.files.caseImage[0].path;
      const imgUpload = await cloudinary.uploader.upload(imgPath, {
        folder: "case/images",
      });
      imageUrl = imgUpload.secure_url;
      fs.unlinkSync(imgPath);
    }

    // Update case fields
    const updatedCase = await Case.findByIdAndUpdate(
      id,
      {
        heading: req.body.heading,
        year: req.body.year,
        description: req.body.description,
        isInvestment:req.body.isInvestment,
      isStrategy:req.body.isStrategy,
        ...(imageUrl && { caseImage: imageUrl }),
        ...(pdfUrl && { pdfLink: pdfUrl }),
      },
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found" });
    }

    res.status(200).json({ message: "Case updated successfully", updatedCase });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating Case Study", error });
  }
};
