const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Saddle = sequelize.define("saddle",{
    saddleId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    // size:{
    //     type:Sequelize.STRING,
    //     allowNull:false,
    // },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Saddle