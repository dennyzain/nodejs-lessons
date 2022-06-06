const fs = require('fs');

// reading and writing to a file

const readStream = fs.createReadStream('./text/greet.txt', 'utf8');
const writeStream = fs.createWriteStream('./text/greet2.txt');

readStream.on('data', (chunk) => {
  console.log('------------ new chunk ----------------');
  console.log(chunk);
  writeStream.write('\n NEW CHUNK \n');
  writeStream.write(chunk);
});

// piping streams

// readStream.pipe(writeStream);
