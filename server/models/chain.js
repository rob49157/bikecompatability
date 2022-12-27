const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Chain = sequelize.define("chain",{
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
    model:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

module.exports = Chain