main.js___________
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Dummy user data
const user = {
    name: 'John Doe',
    age: 28
};

// Route to render user info
app.get('/user', (req, res) => {
  console.log('User data:', user); // Log user data to the console
    res.render('user', { user });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

views/user.ejs (create views folder)

<!DOCTYPE html>
<html>
<head>
    <title>User Info</title>
</head>
<body>
    <h1>User Information</h1>
    <p>name <%= user.name %></p>
    <p>age <%= user.age %></p>
</body>
</html>

