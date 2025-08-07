import express from 'express';
import { getProfile, updateProfile ,allProfiles} from '../controller/profile.controller.js';

const route = express.Router();
    
route.post('/getprofile', getProfile);
route.put('/updateprofile', updateProfile);
route.get('/allprofiles', allProfiles);

export default route;