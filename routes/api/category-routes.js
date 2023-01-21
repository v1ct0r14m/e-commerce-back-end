const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  if (err) throw err
});

router.get('/:id', (req, res) => {

  Category.findOne({
    attributes: ['id', 'category_name'],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  if (err) throw err
});

router.post('/', (req, res) => {

  Category.create({
    category_name: req.body.category_name
  })
  
  .then(categoryData => res.json(categoryData))
  if (err) throw err
});

router.put('/:id', (req, res) => {

  Category.update({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => res.json(categoryData))
  if (err) throw err
})

router.delete('/:id', (req, res) => {

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  if (err) throw err
})

module.exports = router
