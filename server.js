const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Demo Expressjs');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
