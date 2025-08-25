// controllers/awardController.js
import Award from "../models/awards.model.js";
import cloudinary from "../utils/cloudinary.js";

// Create Award
export const createAward = async (req, res) => {
  try {
    const { heading, year, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "awards",
    });

    const award = new Award({
      heading,
      year,
      description,
      awardimageURL: result.secure_url,
    });

    await award.save();
    res.status(201).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Awards
export const getAwards = async (req, res) => {
  try {
    const awards = await Award.find().sort({ year: -1 });
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Award
export const deleteAward = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) return res.status(404).json({ message: "Award not found" });

    await Award.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Award deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/awardController.js

// Update Award
export const updateAward = async (req, res) => {
  try {
    const { heading, year, description } = req.body;

    // Find existing award
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(404).json({ message: "Award not found" });
    }

    // If a new image is uploaded, replace the old one
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "awards",
      });
      award.awardimageURL = result.secure_url;
    }

    // Update other fields if provided
    if (heading) award.heading = heading;
    if (year) award.year = year;
    if (description) award.description = description;

    await award.save();
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
