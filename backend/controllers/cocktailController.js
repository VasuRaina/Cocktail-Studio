import asyncHandler from 'express-async-handler';
import Cocktai from '../models/CocktaiModel.js';

// @description : fetch all Cocktais
// @route GET /api/Cocktais
// @access Public
const getCocktais = asyncHandler(async (req, res) => {
  const Cocktais = await Cocktai.find({});

  res.json(Cocktais);
});

// @description : fetch single Cocktai
// @route GET /api/Cocktais/:id
// @access Public
// const getCocktaiById = asyncHandler(async (req, res) => {
//   const Cocktai = await Cocktai.findById(req.params.id);
//   if (Cocktai) {
//     res.json(Cocktai);
//   } else {
//     res.status(404);
//     throw new Error('Cocktai not found');
//   }
// });

export { getCocktais, getCocktaiById };