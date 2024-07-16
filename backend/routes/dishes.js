const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

// Get all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Toggle the isPublished status of a dish
router.post('/toggle', async (req, res) => {
  try {
    const { dishId } = req.body;
    const dish = await Dish.findOne({ dishId });
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
