const fs = require('fs');
const express = require('express');
const cors = require('cors');

const db = require('./db');
const controllers = require('./appControllers');

const app = express();

app.use(cors())
app.use(express.json());


global.__basedir = __dirname;


app.post('/api/uploadfile', (req, res) => {
  controllers.excelToMySQL(__basedir + '/uploads/carOwners.xlsx');
  res.json({
    "msg": "File uploaded successfully",
    "file": req.file
  })
});

app.get('/api/getowners', (req, res) => {
  let sql = 'SELECT * FROM carowners'
  let query = db.query(sql, (error, response) => {
    if (error) {
      return console.log("ERROR: " + error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})

app.get('/api/filter1', (req, res) => {
  let sql = ` select * from carowners
              where country IN ('China', 'South Africa', 'France', 'Mexico', 'Japan', 'Estonia', 'Colombia')
              and car_color IN ('Green', 'Violet', 'Yellow', 'Blue', 'Teal', 'Maroon', 'Red', 'Aquamarine', 'Orange', 'Mauv')
              and gender="Male"
              and car_model_year >= '1990'
              and car_model_year <= '2010'`;
  let query = db.query(sql, (error, response) => {
    if (error) {
      return console.log("ERROR:" + error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})


app.get('/api/filter2', (req, res) => {
  let sql = `select * from carowners
	where country IN ('China', 'South Africa', 'France', 'Mexico', 'Japan', 'Estonia', 'Colombia')
    and car_color IN ('Green', 'Violet', 'Yellow', 'Blue', 'Teal', 'Maroon', 'Red', 'Aquamarine', 'Orange', 'Mauv')
    and car_model_year >= '1990'
    and car_model_year <= '2010'`;

  let query = db.query(sql, (error, response) => {
    if(error){
      return console.log("ERROR: "+error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})


app.get('/api/filter3', (req, res) => {
  let sql = `select * from carowners
	where car_color IN ('Green', 'Violet', 'Yellow', 'Blue', 'Teal', 'Maroon', 'Red', 'Aquamarine', 'Orange', 'Mauv')
    and gender="Female"
    and car_model_year >= '1980'
    and car_model_year <= '2002'`;

  let query = db.query(sql, (error, response) => {
    if(error){
      return console.log("ERROR: "+error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})


app.get('/api/filter4', (req, res) => {
  let sql = `select * from carowners
	where car_model_year >= '1990'
    and car_model_year <= '2000';`;

  let query = db.query(sql, (error, response) => {
    if(error){
      return console.log("ERROR: "+error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})


app.get('/api/filter5', (req, res) => {
  let sql = `select * from carowners
	where country IN ('China', 'South Africa', 'France', 'Mexico', 'Japan', 'Estonia', 'Colombia')
    and car_model_year >= '1990'
    and car_model_year <= '2009';`;

  let query = db.query(sql, (error, response) => {
    if(error){
      return console.log("ERROR: "+error.code)
    }
    res.json({
      "count": response.length,
      "response": response
    })
  })
})

app.listen(8000, () => {
  console.log("App listening on port 8000")
})

// app.listen(8080, () => {
//   console.log("App listening on port 8080")
// })