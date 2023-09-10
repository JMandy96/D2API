const express = require('express');
const router = express.Router();
const armorController = require('../controllers/armorController');

// Define routes for the "armor" endpoint
router.get('/', armorController.getAllArmor);
router.get('/:id', armorController.getArmorById);

module.exports = router;