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

// TODO: Refactor this function to improve performance
function unusedFunction() {
  var temp = "This function is not used";
  console.log(temp); // This will create a minor code smell
}

// Bad practice: Using var instead of let/const
var counter = 0;

router.get('/debug', (req, res) => {
  counter++;
  console.log('Debug endpoint called', counter); // SonarQube will detect console.log
  res.json({ message: 'Debugging info logged to console' });
});

// GET /api/xss?name=<script>alert('xss')</script>
// ช่องโหว่ XSS
// router.get('/xss', (req, res) => {
//   const name = req.query.name;
//   res.send(`<h1>Welcome ${name}</h1>`);
// });

// GET /api/secret
// router.get('/secret', (req, res) => {
//   const password = 'password123'; 
//   res.json({ secret: password });
// });

const fs = require('fs');
app.get('/readfile', (req, res) => {
  const filename = req.query.file;
  // ช่องโหว่ Path Traversal เช่น /etc/passwd
  fs.readFile(`./uploads/${filename}`, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(data);
  });
});

module.exports = router;
