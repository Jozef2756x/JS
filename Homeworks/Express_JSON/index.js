const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('THE API')
})

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Armen' },
    { id: 2, name: 'Vardan' }
  ]
  res.json(users)
})

app.listen(port, () => {
})