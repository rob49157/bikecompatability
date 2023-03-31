const Sequelize = require("sequelize");
const sequelize = require("../config/connections");

const BottomBracket = require("./../models/BottomBracket");


const BikeBuild = sequelize.define("BikeBuild", {
    bikeBuildId: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type:Sequelize.INTEGER,
        allowNull:true
    }
});

module.exports = BikeBuild;
