const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ven10db'
})

db.connect(error => {
  if (error) {
    console.log(error)
  } 
  console.log('DB Connected...')
})

module.exports = db;