const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      console.log('Received data:', body)
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Data received')
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})

server.listen(3000, () => {
})
