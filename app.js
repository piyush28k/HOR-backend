import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import profileRoute from './routes/profile.route.js';

const app = express();
app.use(express.json());
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://hor123.netlify.app/"],
    credentials: true,
  })
);


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

app.listen(PORT,'0.0.0.0',()=>{
    console.log('running on port', PORT);
})

