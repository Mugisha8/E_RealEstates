'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  apartment.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apartment',
  });
  return apartment;
};