const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', ' tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'tag_name']
      }
    ]
  })
  if (err) throw err
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    attributes: ['id', 'tag_name'],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'category_name']
      },
      {
        model: Tag,
        through: ProductTag,
        as: 'tags'
      }
    ]
  })
  if (err) throw err
});

router.post('/', (req, res) => {
  Tag.create(req.body, {
    where: {
      id: req.params.id,
      tag_name: req.params.tag_name
    }
  })
  if (err) throw err
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  if (err) throw err
});

router.delete('/:id', (req, res) => {
  Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
  if (err) throw err
});

module.exports = router;
