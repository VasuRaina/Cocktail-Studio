import express from 'express';

const router = express.Router();
import { postPost } from '../controllers/postController.js';

router.post('/', postPost);

export default router;
