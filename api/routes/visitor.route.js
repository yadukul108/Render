import express from "express";
import { getAllVisitors } from "../controllers/visitor.controller.js";

const router = express.Router();
router.get("/", getAllVisitors);

export default router;
