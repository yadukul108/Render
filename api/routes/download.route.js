import express from "express";
import { sendPdfLink } from "../controllers/download.controller.js";

const router = express.Router();

router.post("/send-pdf", sendPdfLink);

export default router;
