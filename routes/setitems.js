const express = require('express');
const router = express.Router();
const setItemsController = require('../controllers/setItemsController');

// Define routes for the "setitems" endpoint
router.get('/', setItemsController.getAllSetItems);
router.get('/:id', setItemsController.getSetItemById);

module.exports = router;