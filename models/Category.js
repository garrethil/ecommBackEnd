const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// define category model
Category.init({

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  });

module.exports = Category;
