const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Crankset= sequelize.define("crankset",{
    cranksetId:{
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

module.exports = Crankset