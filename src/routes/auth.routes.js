const { Router } = require('express')
const router = Router()

const authCtrl = require('../controllers/auth.controllers')
const userAlreadyExist = require('../middlewares/userAlreadyExist')

router.post('/auth/signup', userAlreadyExist, authCtrl.signUp)
router.post('/auth/signin', authCtrl.signIn)

module.exports = router