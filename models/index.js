// import models
import sequelize from 'sequelize'
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Category.hasMany(Product, {
  foreignKey: 'category_id',
})

ProductbelongsToMany(Tag, {
  through: {ProductTag,
  unique: false 
  },
foreignKey: 'product_id'
})

Tag.belongsToMany(Product, {
  through: {ProductTag,
  unique: false 
  },
foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}
