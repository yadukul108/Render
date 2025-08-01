import express from 'express';
import upload from '../middleware/multer.js';
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from '../controllers/transaction.controller.js';


const router = express.Router();

router.post(
  '/createTransaction',
  upload.fields([
    { name: 'mainPic', maxCount: 1 },
    { name: 'representingPic', maxCount: 1 },
    { name: 'party2Pic', maxCount: 1 },
    { name: 'assetPic', maxCount: 1 },
  ]),
  createTransaction
);            // Create
router.get('/getAllTransactions', getAllTransactions);              // Read all
router.get('/getTransactionById/:id', getTransactionById);           // Read one
router.put(
  '/updateTransaction/:id',
  upload.fields([
    { name: 'mainPic', maxCount: 1 },
    { name: 'representingPic', maxCount: 1 },
    { name: 'party2Pic', maxCount: 1 },
    { name: 'assetPic', maxCount: 1 },
  ]),
  updateTransaction
);           // Update
router.delete('/deleteTransaction/:id', deleteTransaction);         // Delete

export default router;
