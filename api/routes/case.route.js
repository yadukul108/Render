import express from "express";
import upload from "../middleware/multer.js";
import { createCase, getAllCase, deleteCase,updateCase } from "../controllers/case.controller.js";

const router = express.Router();

router.post(
  "/createCase",
  upload.fields([
    { name: "pdfLink", maxCount: 1 },
    { name: "caseImage", maxCount: 1 }
  ]),
  createCase
);

router.get("/getAllCase", getAllCase);
router.delete("/deleteCase/:id", deleteCase);
router.put(
  "/updateCase/:id",
  upload.fields([
    { name: "pdfLink", maxCount: 1 },
    { name: "caseImage", maxCount: 1 },
  ]),
  updateCase
);
export default router;
