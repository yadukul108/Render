// news.route.js
import express from "express";
import multer from "multer";
import {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";

const router = express.Router();
const upload = multer(); // parses multipart/form-data

router.post("/createNews", upload.none(), createNews);
router.put("/updateNews/:id", upload.none(), updateNews);

router.get("/getAllNews", getAllNews);
router.get("/getNewsById/:id", getNewsById);
router.delete("/deleteNews/:id", deleteNews);

export default router;
