// runeModel.js
const runes = require('./runes.json'); // Import your JSON data

// Get all runes
function getAllRunes() {
  return runes;
}

// Find a rune by ID (assuming 'id' is unique)
function getRuneById(id) {
  return runes.find(rune => rune.id === id);
}

module.exports = {
  getAllRunes,
  getRuneById,
};