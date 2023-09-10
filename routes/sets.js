const express = require('express');
const router = express.Router();
const setsController = require('../controllers/setsController');

// Define routes for the "sets" endpoint
router.get('/', setsController.getAllSets);
router.get('/:id', setsController.getSetById);

module.exports = router;