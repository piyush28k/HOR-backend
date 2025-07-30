import express from 'express';
import { getProfile, updateProfile} from '../controller/profile.controller.js';
import upload from "../middlewares/upload.js";

const route = express.Router();
    
route.post('/getprofile', getProfile);
// route.put("/updateprofile", upload.single("photo"), updateProfile);
route.put('/updateprofile', updateProfile);


export default route;