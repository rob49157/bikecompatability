const Sequelize = require('sequelize');
require('dotenv').config();




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

  sequelize.sync().then(() => {
    console.log('BB table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;