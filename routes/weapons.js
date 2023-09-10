const express = require('express');
const router = express.Router();
const weaponsController = require('../controllers/weaponsController');

// Define routes for the "weapons" endpoint
router.get('/', weaponsController.getAllWeapons);
router.get('/:id', weaponsController.getWeaponById);

module.exports = router;