import {validateJWT} from '../middlewares/validateToken'
const router = require('express').Router()
const {signup, login, generateToken, getLeaderboard, getActions} = require('../controllers/UserController')


router.post('/signup', signup)
router.post('/login', login)
router.get('/renew',validateJWT, generateToken)
router.get('/leaderboard', getLeaderboard)
router.get('/gamelog', getActions)

module.exports = router;