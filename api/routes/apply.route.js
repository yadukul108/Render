import express  from 'express';
import multer   from 'multer';
import { handleApplication } from '../controllers/apply.controller.js';

const router = express.Router();

/* Multer: keep file in memory (Buffer) */
const upload = multer({ storage: multer.memoryStorage() });

router.post('/apply', upload.single('resume'), handleApplication);

export default router;
