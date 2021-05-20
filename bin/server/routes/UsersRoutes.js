"use strict";

var _validateToken = require("../middlewares/validateToken");

const router = require('express').Router();

const {
  signup,
  login,
  generateToken
} = require('../controllers/UserController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/renew', _validateToken.validateJWT, generateToken);
module.exports = router;
//# sourceMappingURL=UsersRoutes.js.map