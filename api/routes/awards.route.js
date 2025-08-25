// routes/awardRoutes.js
import express from "express";
import multer from "multer";
import { createAward, getAwards, deleteAward,updateAward } from "../controllers/awards.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temp storage

router.post("/", upload.single("awardimageURL"), createAward);
router.get("/", getAwards);
router.delete("/:id", deleteAward);
router.put("/:id", upload.single("awardimageURL"), updateAward); 
export default router;
