const mysql = require('mysql')
const { promisify } = require('util')
const keys = require('./keys')

const pool = mysql.createPool(keys)
pool.getConnection((error, connection) => {
  if (error) {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Conexión cerrada')
      console.log(error)
      return
    }

    if (error.code === 'ER_CON_COUNT_ERROR') {
      console.log('La base de datos tiene muchas conecciones')
      console.log(error)
      return
    }

    if (error.code === 'ECONNREFUSED') {
      console.log('Conexión rechazada')
      console.log(error)
      return
    }

    if (error.code === 'ER_BAD_DB_ERROR') {
      console.log('Base de datos no encontrada')
      console.log(error)
      return
    }
  }

  if (connection) {
    connection.release()
    console.log('DB is connected!')
    return
  }
})

pool.query = promisify(pool.query)

module.exports = pool