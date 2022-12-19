const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const warranty = sequelize.define("warranty",{
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
    lifetime:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
    },
    
})

module.exports = warranty