const express = require('express');
const router = express.Router();
const playerclassController = require('../controllers/playerclassController');

// Define routes for the "playerclass" endpoint
router.get('/', playerclassController.getAllPlayerClasses);
router.get('/:id', playerclassController.getPlayerClassById);

module.exports = router;