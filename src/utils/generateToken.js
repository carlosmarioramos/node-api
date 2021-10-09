const config = require('config')
const jwt = require('jsonwebtoken')

const generateToken = async payload => {

  delete payload.password
  delete payload.date
  delete payload.active

  const token = await jwt.sign(
    { user: payload },
    config.get('JWT_SECRET'),
    { expiresIn: '7d' }
  )
  return token
}

module.exports = generateToken