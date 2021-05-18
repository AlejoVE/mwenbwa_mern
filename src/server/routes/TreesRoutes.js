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
router.put('/buy/:id', buyTree)
router.post('/:id/comments', addComment)
router.get('/', getAllTrees)

module.exports= router