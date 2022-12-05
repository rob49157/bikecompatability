const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class warranty extends Model {}

warranty.init({
    id:{
        type:DataTypes.INTERGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lifetime:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    
})

module.exports = warranty