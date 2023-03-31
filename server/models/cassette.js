const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Cassette = sequelize.define("cassette",{
    casseteId:{
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
        allowNull:true,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Cassette