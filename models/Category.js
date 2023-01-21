const { Model, DataTypes } = require('sequelize');

import sequelize from '../config/connection.js';

class Category extends Model {}

Category.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      category_name:{
        type: Datatypes.STRING,
        allowNull: false
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
