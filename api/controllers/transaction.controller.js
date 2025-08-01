import Transaction from '../models/transaction.model.js';
import cloudinary from '../utils/cloudinary.js'; 

import fs from 'fs';
 

export const createTransaction = async (req, res) => {
  try {
    const { heading, year, amount, description, sector, type_of_deal, representing, party2, asset, isFeatured } =
      req.body;

    const uploadToCloudinary = async (filePath) => {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'transactions',
      });
      fs.unlinkSync(filePath); // delete local file
      return result.secure_url;
    };

    const mainPic = req.files?.mainPic
      ? await uploadToCloudinary(req.files.mainPic[0].path)
      : '';

    const representingPic = req.files?.representingPic
      ? await uploadToCloudinary(req.files.representingPic[0].path)
      : '';

    const party2Pic = req.files?.party2Pic
      ? await uploadToCloudinary(req.files.party2Pic[0].path)
      : '';

    const assetPic = req.files?.assetPic
      ? await uploadToCloudinary(req.files.assetPic[0].path)
      : '';

    const newTransaction = new Transaction({
      heading,
      year,
      amount,
      description,
      sector,
      type_of_deal,
      representing,
      party2,
      asset,
      isFeatured,
      mainPic,
      representingPic,
      party2Pic,
      assetPic,
    });

    await newTransaction.save();
    res.status(201).json({ success: true, data: newTransaction });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// GET all transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a single transaction by ID
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a transaction
export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    // Handle new image uploads
    if (req.files) {
      const uploadToCloudinary = async (filePath) => {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'transactions',
        });
        fs.unlinkSync(filePath); // remove local file
        return result.secure_url;
      };

      if (req.files.mainPic) {
        updates.mainPic = await uploadToCloudinary(req.files.mainPic[0].path);
      }

      if (req.files.representingPic) {
        updates.representingPic = await uploadToCloudinary(req.files.representingPic[0].path);
      }

      if (req.files.party2Pic) {
        updates.party2Pic = await uploadToCloudinary(req.files.party2Pic[0].path);
      }

      if (req.files.assetPic) {
        updates.assetPic = await uploadToCloudinary(req.files.assetPic[0].path);
      }
    }

    const updated = await Transaction.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a transaction
export const deleteTransaction = async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
