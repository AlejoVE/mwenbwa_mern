"use strict";

var _validateToken = require("../middlewares/validateToken");

const router = require('express').Router();

const {
  signup,
  login,
  generateToken,
  getLeaderboard,
  getActions,
  editColor
} = require('../controllers/UserController');

router.put('/editcolor', editColor);
router.post('/signup', signup);
router.post('/login', login);
router.get('/renew', _validateToken.validateJWT, generateToken);
router.get('/leaderboard', getLeaderboard);
router.get('/gamelog', getActions);
module.exports = router;
//# sourceMappingURL=UsersRoutes.js.map