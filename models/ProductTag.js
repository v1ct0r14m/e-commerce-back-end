const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
    product_id: {
        type: Datatypes.STRING,
        allowNull: false
      },
    tag_id: {
      type: DataTypes.INTEGER,
      References: {
      model: 'Category',
      key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
)

module.exports = ProductTag
