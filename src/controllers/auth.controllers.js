const pool = require('../db/connection/pool')
const bcrypt = require('bcrypt')

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