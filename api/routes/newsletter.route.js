import express from 'express';
import {
  createNewsletter,
  getAllNewsletters,
  getNewsletterById,
  updateNewsletter,
  deleteNewsletter,
} from '../controllers/newsletter.controller.js';

const router = express.Router();

router.post('/createNewsletter', createNewsletter);              // Create
router.get('/getAllNewsletters', getAllNewsletters);              // Read all
router.get('/getNewsletterById/:id', getNewsletterById);           // Read one
router.put('/updateNewsletter/:id', updateNewsletter);            // Update
router.delete('/deleteNewsletter/:id', deleteNewsletter);         // Delete

export default router;
