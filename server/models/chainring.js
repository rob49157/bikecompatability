const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Chainring = sequelize.define("chainring",{
    chainringId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Chainring