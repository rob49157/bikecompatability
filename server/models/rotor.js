const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Rotor = sequelize.define("rotor",{
    rotorId:{
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
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Rotor