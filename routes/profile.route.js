import express from 'express';
import { getProfile, updateProfile ,allProfiles} from '../controller/profile.controller.js';
import upload from "../middlewares/upload.js";
import cors from 'cors';
app.use(cors({ origin: ['http://localhost:5173', 'https://hor123.netlify.app'], credentials: true }));


const route = express.Router();
    
route.post('/getprofile', getProfile);
// route.put("/updateprofile", upload.single("photo"), updateProfile);
route.put('/updateprofile', updateProfile);
route.get('/allprofiles', allProfiles);

export default route;