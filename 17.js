const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      return res.end('Error loading page');
    }
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
