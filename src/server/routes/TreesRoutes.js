const router = require('express').Router()
const {
    getAllTrees,
    getOneTree,
    buyTree,
    addComment,
    getTreesPositions
} = require('../controllers/TreeController')

router.get('/treesPos', getTreesPositions)
router.get('/:id', getOneTree)
router.get('/', getAllTrees)
router.put('/buy/:id', buyTree)
router.post('/:id/comments', addComment)

module.exports= router