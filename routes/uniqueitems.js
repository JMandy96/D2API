const express = require('express');
const router = express.Router();
const uniqueitemsController = require('../controllers/uniqueitemsController');

// Define routes for the "uniqueitems" endpoint
router.get('/', uniqueitemsController.getAllUniqueItems);
router.get('/:id', uniqueitemsController.getUniqueItemById);

module.exports = router;