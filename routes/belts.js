const express = require('express');
const router = express.Router();
const beltsController = require('../controllers/beltsController');

// Define routes for the "belts" endpoint
router.get('/', beltsController.getAllBelts);
router.get('/:id', beltsController.getBeltById);

module.exports = router;