const { existsSync, createWriteStream } = require('fs');
const { unlink } = require('fs/promises');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  if (!existsSync('index.html')) {
    createWriteStream('index.html').end('<h1>Hello World</h1>');
  } else {
    unlink('index.html')
      .then((res) => console.log('success deleting file'))
      .catch((err) => console.log(err));
  }
});

server.listen(3000, 'localhost', () => {
  console.log('server is listening on port 3000');
});
