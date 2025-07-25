import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import newsletterRoutes from "./routes/newsletter.route.js";
import transactionRoutes from './routes/transaction.route.js';

const app=express();
dotenv.config();


app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, ()=>{
    console.log("Server is running on port 3000!");
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/newsletter',newsletterRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});