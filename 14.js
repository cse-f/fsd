const fs = require('fs');

const reader = fs.createReadStream('temp.txt');
const writer = fs.createWriteStream('output.txt');

reader.on('data', chunk => writer.write(chunk));
reader.on('end', () => console.log('Done'));
reader.on('error', err => console.log('Read error:', err));
writer.on('error', err => console.log('Write error:', err));
