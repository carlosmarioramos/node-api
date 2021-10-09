const pool = require('../db/connection/pool')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

exports.signUp = async (req, res) => {
  const { email, password } = req.body
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)'
  const hash = await bcrypt.hash(password, 10)
  const params = [email, hash]
  
  try {
    await pool.query(sql, params)
    res.status(201)
    res.json({
      msg: "User created!"
    })
  } catch (error) {
    throw new Error(error)
  }
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body
  const sql = 'SELECT * FROM users WHERE email = ?'

  try {
    const response = await pool.query(sql, email)
    const user = response.length > 0 ? response[0] : null

    if (!user) {
      res.status(404)
      res.json({
        msg: 'User not found'
      })

      return
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      res.status(401)
      res.json({
        msg: "Password doesn't match"
      })

      return
    }
    
    const token = await generateToken(user)
    user.token = token
    
    res.status(200)
    res.json(user)
    return
  } catch (error) {
    throw new Error(error)
  }  
}