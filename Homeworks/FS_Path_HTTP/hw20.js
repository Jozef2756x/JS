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
    const errorPath = path.join(__dirname, '404.html')
    fs.readFile(errorPath, (err, data) => {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      if (err) {
        res.end('<h1>404 - Page Not Found</h1>')
      } else {
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => {

})