const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const cassette = sequelize.define("cassette",{
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

module.exports = cassette