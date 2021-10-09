const config = require('config')
const jwt = require('jsonwebtoken')

const isAuthorized = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401)
    res.json({ msg: "Authorization header doesn't exist" })
    return
  }

  const token = authorization.toLowerCase().startsWith('bearer')
    ? authorization.split(' ')[1]
    : null
  
  try {
    if (!token) return res.status(401).json({ msg: 'Invalid or not provided token' })
    const decodedToken = await jwt.verify(token, config.get('JWT_SECRET'))
    req.user = decodedToken
    next()
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = isAuthorized