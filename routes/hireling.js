const express = require('express');
const router = express.Router();
const hirelingController = require('../controllers/hirelingController');

// Define routes for the "hireling" endpoint
router.get('/', hirelingController.getAllHirelings);
router.get('/:id', hirelingController.getHirelingById);

module.exports = router;