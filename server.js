const { existsSync, createReadStream, writeFile } = require('fs');
const { appendFile } = require('fs/promises');
const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');

  const writeHtmlRoutes = (pathDestination, indexPath, mode) => {
    if (existsSync('index.html')) {
      const readStream = createReadStream(indexPath, 'utf-8');
      if (mode === 'write') {
        readStream.on('data', (chunk) => {
          writeFile(pathDestination, chunk, (err) => console.log(err));
          res.end();
        });
      } else {
        readStream.on('data', (chunk) => {
          res.write(chunk);
          res.end();
        });
      }
    }

    switch (req.url) {
      case '/':
        writeHtmlRoutes('routes/home/index.html', 'index.html', 'write');
        writeHtmlRoutes('routes/home/index.html', 'read');
        break;
      case '/about':
        appendFile('index.html', '<p>This is About page</p>');
        read();
        break;
      default:
        break;
    }
  };

  // set header
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.write('Hello World');
});

server.listen(3000, 'localhost', () => {
  console.log('server is listening on port 3000');
});
