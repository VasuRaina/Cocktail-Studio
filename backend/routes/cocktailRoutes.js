import express from 'express';
import Cocktail from '../models/cocktailModel.js';

const router = express.Router();
import { getCocktail, getCocktailByName, postCocktail } from '../controllers/cocktailController.js';

router.get('/', getCocktailByName);

router.post('/', postCocktail);
// router.get('/', (req, res) => {
//   res.json({ mssg: 'GET ALL COCKTAILS' });
// });

router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET A SINGLE COCKTAILS' });
});

export default router;
