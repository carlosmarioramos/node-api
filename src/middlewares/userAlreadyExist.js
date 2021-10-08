const pool = require('../db/connection/pool')

const userAlreadyExist = async (req, res, next) => {
  const { email } = req.body
  const sql = 'SELECT email FROM users WHERE email = ?'

  try {
    const response = await pool.query(sql, email)
    const user = response.length > 0 ? response[0].email : null
    
    if (user) {
      res.status(401)
      res.json({
        msg: "User already exist"
      })

      return
    }

    next()

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = userAlreadyExist