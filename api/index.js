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
import awardRoutes from "./routes/awards.route.js";
import caseRoutes from "./routes/case.route.js";
import newsRoutes from "./routes/news.route.js";
import visitorRoutes from "./routes/visitor.route.js";
import downloadRoutes from "./routes/download.route.js";
dotenv.config();

const app = express(); 

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.set('strictQuery', false); // Prepare for Mongoose 7/8 changes

mongoose.connect(process.env.MONGO, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
})
.then(() => {
  console.log('✅ MongoDB is connected successfully to:', mongoose.connection.name);
})
.catch((err) => {
  console.error('❌ MongoDB initial connection error:', err.message);
});

// Explicit listeners for better production visibility
mongoose.connection.on('error', err => {
  console.error('❌ MongoDB runtime error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB disconnected');
});


// Health check for pingers (keeps Render awake)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Routes


app.use("/api/download", downloadRoutes);

app.use("/api/assets", assetRoutes);
app.use("/api/cases", caseRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api', applyRoutes);
app.use('/api', contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/visitor",visitorRoutes);
// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  // Use a generic message in production to prevent leaking sensitive schema/DB details
  const isProduction = process.env.NODE_ENV === 'production';
  const message = isProduction && statusCode === 500 
    ? 'Internal Server Error' 
    : err.message || 'Internal Server Error';

  // Log full error internally for debugging
  console.error(`[Error] ${statusCode}: ${err.message}`, err.stack);

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    // Only send stack trace in development
    ...( !isProduction && { stack: err.stack } )
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
