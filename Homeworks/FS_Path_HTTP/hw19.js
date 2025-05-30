const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    const filePath = path.join(__dirname, 'index.html')
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8')
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Server Error')
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})

server.listen(3000, () => {

})