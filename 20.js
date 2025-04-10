const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from Express', status: 'success' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
