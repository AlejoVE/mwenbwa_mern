const router = require('express').Router()
const {getAllTrees, getOneTree} = require('../controllers/TreeController')

router.get('/', getAllTrees)
router.get('/:id', getOneTree)

module.exports= router