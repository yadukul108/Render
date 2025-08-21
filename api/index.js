import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import newsletterRoutes from './routes/newsletter.route.js';
import transactionRoutes from './routes/transaction.route.js';
import applyRoutes from './routes/apply.route.js';
import contactRoutes from './routes/contact.route.js';
import cors from 'cors';
import assetRoutes from "./routes/asset.route.js";
import downloadRoutes from "./routes/download.route.js";
dotenv.config();

const app = express(); 

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error(err);
  });


// Routes


app.use("/api/download", downloadRoutes);

app.use("/api/assets", assetRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api', applyRoutes);
app.use('/api', contactRoutes);
// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
