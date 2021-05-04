const router = require('express').Router()
const {signUp} = require('../controllers/UserController')

router.post('/signup', signUp)


module.exports = router;