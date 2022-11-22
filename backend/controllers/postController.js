import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

const postPost = asyncHandler(async (req, res) => {
    const { title, description, userName, cocktailName } = req.body;
    try {
      const post = await Post.create({ title, description , userName, cocktailName});
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

const deletePost = asyncHandler(async (req, res) => {
    const { title, userName} = req.body;
    try {
      const post = await Post.deleteOne({userName, title });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  const getPost = asyncHandler(async (req, res) => {
    const {userName} = req.body;
    try {
      const post = await Post.find({ userName });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export { postPost, deletePost, getPost };
