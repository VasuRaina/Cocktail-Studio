import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

const postPost = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  try {
    const post = await Post.create({ title, description });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { postPost };
