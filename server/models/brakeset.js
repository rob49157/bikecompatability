

const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Brakeset= sequelize.define("brakeset",{
    brakesetId:{
        type:Sequelize.INTEGER,
        allowNull: true,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    model:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

module.exports = Brakeset