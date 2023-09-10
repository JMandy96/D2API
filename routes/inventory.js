const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for the "inventory" endpoint
router.get('/', inventoryController.getAllInventory);
router.get('/:id', inventoryController.getInventoryById);

module.exports = router;