const { Model, DataTypes, Sequelize } = require('sequelize');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prodcuct_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      validate: {
        isDecimal: true
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        isNumeric: true 
        }
      },
    category_id: {
      type: DataTypes.INTEGER,
      References: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    Sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
)

module.exports = Product
