import asyncHandler from 'express-async-handler';
import Cocktail from '../models/CocktailModel.js';

// @description : fetch all Cocktais
// @route GET /api/Cocktais
// @access Public
const getCocktail = asyncHandler(async (req, res) => {
  const Cocktail = await Cocktail.find({});

  res.json(Cocktail);
});

// @description : fetch single Cocktail
// @route GET /api/Cocktais/:id
// @access Public
const getCocktailByName = asyncHandler(async (req, res) => {
  const Cocktail = await Cocktail.find(req.params.name);
  if (Cocktail) {
    res.json(Cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

// @description : fetch Cocktails
// @route GET /api/Cocktais/:glassware
// @access Public
const getCocktailByGlassware = asyncHandler(async (req, res) => {
  const Cocktail = await Cocktail.find(req.params.glassware);
  if (Cocktail) {
    res.json(Cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

export { getCocktail, getCocktailByName , getCocktailByGlassware};