const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product
    }
  }).then(dbCategories => {
    res.json(dbCategories);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  }).then(dbCategories => {
    res.json(dbCategories);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(dbNewCategory => {
      res.json(dbNewCategory);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUpdatedCategory => {
      res.json(dbUpdatedCategory);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDeletedCategory =>
      res.json(dbDeletedCategory));
});

module.exports = router;
