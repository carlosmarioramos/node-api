const config = require('config')

const keys = {
  host: config.get('DB_HOST'),
  user: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME')
}

module.exports = keys