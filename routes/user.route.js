import express from 'express';
import { register, login, getUser,googleLogin } from '../controller/user.controller.js'

    const route = express.Router();

    route.post('/register', register);
    route.post('/googlelogin', googleLogin);
    route.post('/login', login);
    route.post('/getuser', getUser);

    export default route;