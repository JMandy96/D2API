const express = require('express');
const router = express.Router();
const charstatsController = require('../controllers/charstatsController');

// Define routes for the "charstats" endpoint
router.get('/', charstatsController.getAllCharStats);
router.get('/:id', charstatsController.getCharStatsById);

module.exports = router;