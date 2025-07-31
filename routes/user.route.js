import express from 'express';
import { register, login, getUser,googleLogin } from '../controller/user.controller.js'
import cors from 'cors';
app.use(cors({ origin: ['http://localhost:5173', 'https://hor123.netlify.app'], credentials: true }));

    const route = express.Router();

    route.post('/register', register);
    route.post('/googlelogin', googleLogin);
    route.post('/login', login);
    route.post('/getuser', getUser);

    export default route;