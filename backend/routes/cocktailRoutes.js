const express = require('express')
const { cocktailPost } = require('../controllers/cocktailsController')


const router = express.Router()

//get
router.get('/:id', (req, res) => {
    res.json({msg: 'GET is working '})
})

//post
router.post('/:id', cocktailPost)

//delete
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE is working '})
})

//update
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update is working '})
})

module.exports = router