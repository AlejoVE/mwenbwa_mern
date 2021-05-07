const router = require('express').Router()
const {
    getAllTrees,
    getOneTree,
    buyTree
} = require('../controllers/TreeController')

router.get('/', getAllTrees)
router.get('/:id', getOneTree)
router.post('/buy/:id', buyTree)

module.exports= router