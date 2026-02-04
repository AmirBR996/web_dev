import express from 'express'
import { create, getAll, getById,update,remove } from '../controllers/task.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router()


//! get all tasks
router.get('/',authenticate,getAll)

//! get by id
router.get('/:id',authenticate,getById)

//! create 
router.post('/',authenticate ,create)

//!update
router.put('/:id',authenticate,update)

//! delete
router.delete('/:id',authenticate,remove)

//! pin task

//! get all pinned task


export default router;