const { Model, DataTypes } = require("sequilize");
const sequalize = require("../config/connections");

class rear_travel extends Model {}

rear_travel.init({
  id: {
    type: DataTypes.INTERGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  travel: {
    type: DataTypes.INTERGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTERGER,
    allowNull: false,
  },
});

module.exports = rear_travel;
