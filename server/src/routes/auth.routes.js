import express from 'express'
import {
  getUserDetail,
  login,
  register,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";


const router = express.Router()


// register route
router.post('/register',register);

// login 
router.post('/login',login)

// user detail
router.get('/user-detail',authenticate,getUserDetail)


export default router