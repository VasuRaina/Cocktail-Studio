import express from 'express';
import Cocktail from '../models/cocktailModel.js';

const router = express.Router();
import { getCocktail, getCocktailByGlassware, getCocktailByName, postCocktail } from '../controllers/cocktailController.js';

router.get('/', getCocktail);

router.post('/', postCocktail);
// router.get('/', (req, res) => {
//   res.json({ mssg: 'GET ALL COCKTAILS' });
// });
router.post('/name', getCocktailByName);

router.get('/glassware', getCocktailByGlassware);



export default router;
