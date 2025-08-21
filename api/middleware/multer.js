import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExts = [".jpg", ".jpeg", ".png", ".pdf"];

  if (!allowedExts.includes(ext)) {
    return cb(new Error("Only images and PDFs are allowed"));
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

export default upload;
