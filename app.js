import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import profileRoute from './routes/profile.route.js';
import uploadRoute from './routes/upload.route.js';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://hor123.netlify.app'],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.DATABASE_URL

try{
    mongoose.connect(MONGO_URL)
    console.log("connected to MongoDB successfully");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

app.use('/user', userRoute);
app.use('/profile', profileRoute);
app.use('/api', uploadRoute);

app.listen(PORT,'0.0.0.0',()=>{
    console.log('running on port', PORT);
})