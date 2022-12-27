const Sequelize = require('sequelize')
const sequelize= require('../config/connections')


const  BottomBracket = sequelize.define("BottomBracket", {
    id:{
        type:Sequelize.INTEGER,
        allowNull: true,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    size:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})  

module.exports = BottomBracket


