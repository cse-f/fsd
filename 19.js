const http = require('http');

http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at contact@example.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
