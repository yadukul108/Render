import express from "express";
import upload from "../middleware/multer.js";
import { 
  createAsset, 
  getAllAssets, 
  updateAsset, 
  deleteAsset 
} from "../controllers/asset.controller.js";

const router = express.Router();

// Create
router.post("/createAsset", upload.single("pdfReportLink"), createAsset);

// Read
router.get("/getAllAssets", getAllAssets);

// Update
router.put("/updateAsset/:id", upload.single("pdfReportLink"), updateAsset);

// Delete
router.delete("/deleteAsset/:id", deleteAsset);

export default router;
