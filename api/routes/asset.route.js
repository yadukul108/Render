import express from "express";
import upload from "../middleware/multer.js";
import { createAsset,getAllAssets } from "../controllers/asset.controller.js";

const router = express.Router();

// Create
router.post(
  "/createAsset",
  upload.single("pdf"), // only one PDF upload
  createAsset
);
router.get("/getAllAssets", getAllAssets);
export default router;
