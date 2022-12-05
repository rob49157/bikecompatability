const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class brand extends Model {}

brand.init({
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
        allowNull:false,
    },
    price:{
        type:DataTypes.INTERGER,
        allowNull:false
    }
})

module.exports = brand