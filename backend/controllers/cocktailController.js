import asyncHandler from 'express-async-handler';
import Cocktail from '../models/cocktailModel.js';
let cocktailInput = '155 Belmont';
let glassInput = "Collins Glass";

// @description : fetch all Cocktais
// @route GET /api/Cocktais
// @access Public
const getCocktail = asyncHandler(async (req, res) => {
  const cocktail = await Cocktail.find({});
  console.log('This works');
  res.status(200).json(cocktail);
});

const postCocktail = asyncHandler(async (req, res) => {
  const { name } = req.body;
  try {
    const cocktail = await Cocktail.create({ name });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(cocktail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @description : fetch single Cocktail
// @route GET /api/Cocktais/:name
// @access Public

const getCocktailByName = asyncHandler(async (req, res) => {
  console.log("postRequest")
  const cocktail = await Cocktail.find(req.body);
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
  const cocktail = await Cocktail.find({ glassType: glassInput });
  if (cocktail) {
    res.json(cocktail);
  } else {
    res.status(404);
    throw new Error('Cocktail not found');
  }
});

export { getCocktail, getCocktailByName, getCocktailByGlassware, postCocktail };