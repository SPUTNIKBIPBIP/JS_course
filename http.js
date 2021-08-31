const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/hmtl'});
  res.end('<html><head></head><body><il>hello world</il></body></html>');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})