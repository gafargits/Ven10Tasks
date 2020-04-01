const readXlsxFile = require('read-excel-file/node');

const db = require('./db');

module.exports = {
  excelToMySQL: (filePath) => {
    readXlsxFile(filePath)
      .then(rows => {
        rows.shift();

        let sql = 'INSERT INTO carowners(id, first_name, last_name, email, country, car_model, car_model_year, car_color, gender, job_title, bio) VALUES ?';
        let query = db.query(sql, [rows], (error, response) => {
          if (error) {
            return console.log("ERROR:" + error.code)
          }
          console.log(response);
        })
      })
  },

  getCarOwners: () => {
    let sql = 'SELECT * FROM carowners'
    let query = db.query(sql, (error, response) => {
      if (error) {
        return console.log("ERROR: " + error.code)
      }
      return response
    })
  }

}

