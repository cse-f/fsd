const fs = require('fs');

// Create read and write streams
const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('output.txt');

// Pipe the read stream to the write stream
reader.pipe(writer);
