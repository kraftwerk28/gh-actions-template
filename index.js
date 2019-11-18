const http = require('http')

http
  .createServer((_, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' }).end('ok')
  })
  .listen(process.env.PORT || 8080, () => console.log('Server listening...'))
