const express = require('express');
const router = express.Router();
const plrtypeController = require('../controllers/plrtypeController');

// Define routes for the "plrtype" endpoint
router.get('/', plrtypeController.getAllPlrTypes);
router.get('/:id', plrtypeController.getPlrTypeById);

module.exports = router;