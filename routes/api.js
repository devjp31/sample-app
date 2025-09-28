const express = require('express');
const router = express.Router();

// Endpoint 1: GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Endpoint 2: GET /api/user/:name
router.get('/user/:name', (req, res) => {
  res.json({ user: req.params.name });
});

// Endpoint 3: POST /api/add
router.post('/add', (req, res) => {
  const { a, b } = req.body;
  const sum = Number(a) + Number(b);
  res.json({ a, b, sum });
});

// Endpoint 4: DELETE /api/item/:id
router.delete('/item/:id', (req, res) => {
  res.json({ message: `Item with ID ${req.params.id} deleted.` });
});

module.exports = router;
