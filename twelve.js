const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  const info = `
    Hostname: ${os.hostname()}
    Platform: ${os.platform()}
    Architecture: ${os.arch()}
    Total Memory: ${os.totalmem()}
    Free Memory: ${os.freemem()}
    Uptime: ${os.uptime()}
  `;

  res.end(info);
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
