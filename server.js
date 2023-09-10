const express = require('express');
const app = express();

// Import route files
const runesRoutes = require('./routes/runes');
const setsRoutes = require('./routes/sets');
const playerclassRoutes = require('./routes/playerclass'); // Import the playerclass route file
const plrtypeRoutes = require('./routes/plrtype'); // Import the plrtype route file
// Import other route files as needed

// Use the route files
app.use('/api/runes', runesRoutes);
app.use('/api/sets', setsRoutes);
app.use('/api/setitems', setItemsRoutes);
app.use('/api/playerclass', playerclassRoutes); // Use the playerclass routes
app.use('/api/plrtype', plrtypeRoutes); // Use the plrtype routes
// Use other route files as needed

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});