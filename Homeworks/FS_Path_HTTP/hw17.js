const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Home Page')
  } else if (url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('About Page')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('Page Not Found')
  }
})

server.listen(3000, () => {

})