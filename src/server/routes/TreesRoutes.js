const router = require('express').Router()
const {
    getAllTrees,
    getOneTree,
    buyTree
} = require('../controllers/TreeController')

router.get('/', getAllTrees)
router.get('/:id', getOneTree)
router.put('/buy/:id', buyTree)

module.exports= router