

const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const brakeset= sequelize.define("brakeset",{
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
        allowNull:true,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = brakeset