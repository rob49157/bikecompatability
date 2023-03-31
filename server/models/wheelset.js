const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Wheelset = sequelize.define("wheelset",{
    wheelsetId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    model:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    size:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Wheelset