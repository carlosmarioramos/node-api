const { Router } = require('express')
const router = Router()
const isAuthorized = require('../middlewares/isAuthorized')
const userCtrl = require('../controllers/user.controllers')

router.get('/', userCtrl.root)
router.get('/profile', isAuthorized, (req, res) => {
  const user = req.user
  res.json(user)
})

module.exports = router