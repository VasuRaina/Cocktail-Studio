import mongoose from 'mongoose';

const glasswareSchema = mongoose.Schema(
    {
      
      name: {
        type: String,
        required: true,
      },
      drinks: {
        type: String,
        required: true,
      },
      
    },
    
  );
  
  const Glassware = mongoose.model('Glassware', glasswareSchema);
  
  export default Glassware;