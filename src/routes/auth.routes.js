const { Router } = require('express')
const router = Router()

const authCtrl = require('../controllers/auth.controllers')
const userAlreadyExist = require('../middlewares/userAlreadyExist')

router.post('/auth/signup', userAlreadyExist, authCtrl.signUp)

module.exports = router