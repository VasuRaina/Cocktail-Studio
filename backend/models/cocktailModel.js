import mongoose from 'mongoose';

const cocktailSchema = mongoose.Schema(
    {
      
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      glassware: {
        type: String,
        required: true,
      },
      ingredients: {
        type: String,
        required: true,
      },
      instructions: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
  
      
    },
    
  );
  
  const Cocktail = mongoose.model('Cocktail', cocktailSchema);
  
  export default Cocktail;