const { Router } = require('express')
const router = Router()
const userCtrl = require('../controllers/user.controllers')

router.get('/', userCtrl.root)

module.exports = router