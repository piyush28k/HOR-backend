import dotenv from 'dotenv';
dotenv.config(); // 🔥 Critical line

import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import { uploadImage } from '../controller/upload.controller.js'; // Import the controller

const router = express.Router();

// --- Configure Cloudinary and Multer ---
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'mern-app-uploads',
        allowed_formats: ['jpeg', 'png', 'jpg'],
    },
});

const upload = multer({ storage: storage });
// --- End Configuration ---


// Define the POST route.
// 1. The request hits '/upload'.
// 2. The 'upload.single()' middleware processes the file and sends it to Cloudinary.
// 3. If successful, it passes control to the 'uploadImage' controller function.
router.post('/upload', upload.single('myImage'), uploadImage);

export default router;