const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Grips = sequelize.define("grips",{
    gripsId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Grips