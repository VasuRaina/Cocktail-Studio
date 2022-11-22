import express from 'express';

const router = express.Router();
import { deletePost, getPost, postPost } from '../controllers/postController.js';

router.post('/', postPost);

router.get('/', getPost);

router.delete('/', deletePost);

export default router;
