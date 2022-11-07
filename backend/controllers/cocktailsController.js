const Cocktails = require('../models/drinksModel')
let allIngredients= "";
let allMeasurements="";
const cocktailPost = async (req, res) => {
    const { name, image, glassware, ingredients, instructions, category } = req.body

    try {
        const cocktails = await Cocktails.create({ name, image, glassware, ingredients, instructions, category })
        res.status(200).json(cocktails)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_URI;

const fetchName = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CSC648");
    var query = {name: "1-900-FUK-MEUP"}
    dbo.collection("drinks").find(query).toArray(function(err, result) {
        if (err) throw err;
        for(let i =0; i < result[0].ingredients.length ; i++){
            allIngredients = allIngredients + ", " + result[0].ingredients[i].name ;
            allMeasurements = allMeasurements + ", " + result[0].ingredients[i].measure ;
        }
        console.log(allIngredients);
        console.log(allMeasurements);
        db.close();
    });
});

const drinkCards = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("CSC648");
    dbo.collection("drinks").find({}).toArray(function(err, result) {
      if (err) throw err;
      for(let i =0 ; i < result.length; i++){

      }
      console.log(result[1].name);
      db.close();
    });
  });


module.exports = {
    cocktailPost
}