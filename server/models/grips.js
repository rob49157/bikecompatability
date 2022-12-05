const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class grips extends Model {}

grips.init({
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
   
    price:{
        type:DataTypes.INTERGER,
        allowNull:false
    }
})

module.exports = grips