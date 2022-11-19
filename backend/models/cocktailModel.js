import mongoose from 'mongoose';

const cocktailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: true,
  },
  glassType: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

export default Cocktail;
