const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class crankset extends Model {}

crankset.init({
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
    travel:{
        type:DataTypes.INTERGER,
        allowNull:false,
    },
    price:{
        type:DataTypes.INTERGER,
        allowNull:false
    }
})

module.exports = crankset