const Cocktails = require('../models/drinksModel')

const cocktailPost = async (req, res) => {
    const {name , image, glassware ,ingredients, instructions, category} = req.body

    try{
        const cocktails = await Cocktails.create({name , image, glassware ,ingredients, instructions, category})
        res.status(200).json(cocktails)
    }catch(error){
        res.status(400).json({error: error.message})

    }
    
}

module.exports ={
    cocktailPost
}