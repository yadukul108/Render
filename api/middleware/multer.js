// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const ext = path.extname(file.originalname).toLowerCase();
//   const allowedExts = [".jpg", ".jpeg", ".png", ".pdf"];

//   if (!allowedExts.includes(ext)) {
//     return cb(new Error("Only images and PDFs are allowed"));
//   }
//   cb(null, true);
// };

// const upload = multer({ storage, fileFilter });

// export default upload;

import multer from "multer";
import path from "path";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js"; // <-- import your configured instance

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const ext = path.extname(file.originalname).toLowerCase();
    let resourceType = "image";

    // PDFs must be uploaded as "raw"
    if (ext === ".pdf") {
      resourceType = "raw";
    }

    return {
      folder: "uploads", // Cloudinary folder name
      resource_type: resourceType,
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`, // unique filename
      allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    };
  },
});

const upload = multer({ storage });

export default upload;
