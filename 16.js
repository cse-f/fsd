const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  fs.readFile('temp.txt', 'utf8', (err, data) => {
    if (err) return res.end('Error reading file');
    res.end(data);
  });
}).listen(3000);
