const router = require('express').Router()
import {validateJWT} from '../middlewares/validateToken'

const {
    getAllTrees,
    getOneTree,
    buyTree,
    addComment,
    getTreesPositions,
    lockTree
} = require('../controllers/TreeController')

router.get('/treesPos', getTreesPositions)
router.get('/:id', getOneTree)

router.put('/buy/:id', validateJWT, buyTree)
router.put('/lock/:id', validateJWT, lockTree)
router.post('/:id/comments', validateJWT, addComment)
router.get('/', getAllTrees)

module.exports= router