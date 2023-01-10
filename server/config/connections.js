const {Sequelize, DataTypes}  = require('sequelize');
require('dotenv').config();
const express = require('express')();
const bodyParser = require('body-parser');


  const sequelize = new Sequelize(
  
     process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

  // express.GET("/", (req,res)=>{
  //   const sqlInsert = "INSERT INTO Brakeset (name, model, price) VALUE ('Mogura', 'stf');"
  //   console.log("fsadfasdf")
  //   sequelize.query(sqlInsert, (err, result)=>{
    
  //     res.send("Hello roberto")
      
  //   })
    
  // })

//  sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

module.exports = sequelize;