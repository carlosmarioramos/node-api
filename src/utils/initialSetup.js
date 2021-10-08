const pool = require('../db/connection/pool')

exports.createRoles = async (req, res) => {
  let sql = 'SELECT COUNT(*) FROM roles'
  const response = await pool.query(sql)
  const roles = response[0]['COUNT(*)']

  if (roles > 0) return

  sql = 'INSERT INTO roles (name) VALUES (?), (?)'
  const params = ['administrator', 'default']

  await pool.query(sql, params)
  console.log('Roles created!')
  return
}