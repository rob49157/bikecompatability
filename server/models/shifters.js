const Sequelize = require('sequelize')
const sequelize= require('../config/connections')




const Shifter = sequelize.define("shifter",{
    shifterId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    // gears:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false,
    // },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Shifter