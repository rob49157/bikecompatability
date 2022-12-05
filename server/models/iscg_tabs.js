const { Model, DataTypes} = require('sequilize')
const sequalize= require('../config/connections')


class iscg_tabs extends Model {}

iscg_tabs.init({
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

module.exports = iscg_tabs