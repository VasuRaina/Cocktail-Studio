const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cocktailSchema = new Schema(
  {

    name: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    glassware: {
      type: String,
      required: false,
    },
    ingredients: [
      {
        name: {
          type: String,
          required: false,
        },
        // volume: {
        //   type: String,
        //   required: false,
        // },
      },
    ],
    instructions: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },


  },

);

module.exports = mongoose.model('Cocktails', cocktailSchema);

