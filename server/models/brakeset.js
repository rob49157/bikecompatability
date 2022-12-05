const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class brakeset extends Model {}

brakeset.init({
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
    size:{
        type:DataTypes.INTERGER,
        allowNull:true,
    },
    price:{
        type:DataTypes.INTERGER,
        allowNull:false
    }
})

module.exports = brakeset