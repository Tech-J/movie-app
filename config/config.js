require('dotenv').config()

module.exports = {
  port: process.env.port,
  dbURL: process.env.dbURL,
  tmDB:process.env.tmDB
}