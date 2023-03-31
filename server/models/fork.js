const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Fork = sequelize.define("fork",{
    forkId:{
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
    travel:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Fork