const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get Tag by id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!'})
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new Tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});
 // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
 
  try {
    const { tag_name } = req.body;
    const tagData = await Tag.update(
      { tag_name: tag_name },
      { where: { id: req.params.id }}
    );

    if (!tagData) {
      res.status(404).json({ message: 'no tag found with that id' })
      return;
    }
    res.status(404).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete tag with Id
router.delete('/:id', (req, res) => {
  try {
    const tagData = Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: 'succesfully deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
