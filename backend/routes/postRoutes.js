import express from 'express';


const router = express.Router();
import { getPost } from '../controllers/postController.js';


router.post('/', getPost);

export default router;