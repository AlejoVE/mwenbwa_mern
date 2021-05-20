"use strict";

var _validateToken = require("../middlewares/validateToken");

const router = require('express').Router();

const {
  getAllTrees,
  getOneTree,
  buyTree,
  addComment,
  getTreesPositions,
  lockTree
} = require('../controllers/TreeController');

router.get('/treesPos', getTreesPositions);
router.get('/:id', getOneTree);
router.put('/buy/:id', buyTree);
router.put('/lock/:id', _validateToken.validateJWT, lockTree);
router.post('/:id/comments', addComment);
router.get('/', getAllTrees);
module.exports = router;
//# sourceMappingURL=TreesRoutes.js.map