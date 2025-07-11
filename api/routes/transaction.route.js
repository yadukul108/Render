import express from 'express';
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.post('/createTransaction', createTransaction);              // Create
router.get('/getAllTransactions', getAllTransactions);              // Read all
router.get('/getTransactionById/:id', getTransactionById);           // Read one
router.put('/updateTransaction/:id', updateTransaction);            // Update
router.delete('/deleteTransaction/:id', deleteTransaction);         // Delete

export default router;
