const Sequelize = require('sequelize')
const sequelize= require('../config/connections')


const  BottomBracket = sequelize.define("BottomBracket", {
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    size:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})  

module.exports = BottomBracket


