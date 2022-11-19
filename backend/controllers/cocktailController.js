import asyncHandler from 'express-async-handler';
import  Cocktail  from '../models/cocktailModel.js';

// @description : fetch all Cocktais
// @route GET /api/Cocktais
// @access Public
const getCocktail = asyncHandler(async (req, res) => {
  const cocktail = await Cocktail.find({});
  if (cocktail) {
    res.json(cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

// @description : fetch single Cocktail
// @route GET /api/Cocktais/:id
// @access Public
const getCocktailByName = asyncHandler(async (req, res) => {
  const cocktail = await Cocktail.find(req.params.name);
  if (cocktail) {
    res.json(cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

// @description : fetch Cocktails
// @route GET /api/Cocktais/:glassware
// @access Public
const getCocktailByGlassware = asyncHandler(async (req, res) => {
  const cocktail = await Cocktail.find(req.params.glassware);
  if (cocktail) {
    res.json(cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

export { getCocktail, getCocktailByName, getCocktailByGlassware };
