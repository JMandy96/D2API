// runeController.js
const RuneModel = require('./runeModel.js');

// Get all runes
function getAllRunes(req, res) {
  const runes = RuneModel.getAllRunes();
  res.json(runes);
}

// Get a rune by ID
function getRuneById(req, res) {
  const { id } = req.params;
  const rune = RuneModel.getRuneById(id);
  
  if (!rune) {
    res.status(404).json({ error: 'Rune not found' });
  } else {
    res.json(rune);
  }
}

module.exports = {
  getAllRunes,
  getRuneById,
};