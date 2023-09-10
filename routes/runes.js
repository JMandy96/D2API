const express = require('express');
const router = express.Router();


// Define routes for the "runes" endpoint
router.get('/', runesController.getAllRunes);
router.get('/:id', runesController.getRuneById);

module.exports = router;