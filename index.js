const http = require('http')

const PORT = process.env.PORT || 8080

http
  .createServer((_, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' }).end('ok')
  })
  .listen(PORT, () => console.log('Server listening on :' + PORT))
