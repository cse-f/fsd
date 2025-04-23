---->main.js  run on localhost:3000/contact
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Dummy user data
const Contact = {
    "name": "Alice",
    "email": "alice@example.com",
    "phone": "1234567890"
};

// Route to render user info
app.get('/contact', (req, res) => {
    res.render('contact', { Contact });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

--->contact.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>NAME:<%= Contact.name %></p>
  <p>EMAIL:<%= Contact.email %></p>
  <p>PHONE<%= Contact.phone %></p>
</body>
</html>
