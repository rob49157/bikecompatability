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



module.exports = sequelize;