const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const path = require('path')

const app = express()
app.use(express.json())
const PORT = 3000

let users = []

const JWT_SECRET = '12345678'

app.post('/auth/register', (req, res) => {
  const { name, password, email } = req.body

  if (!name || !password || !email) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const newUser = {
    name,
    password,
    email,
    role: 'user'
  }

  if (fs.existsSync('./data/users.json')) {
    users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'))
  }

  users.push(newUser)

  fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2))

  res.status(201).json({ message: 'User created'})

})

app.post('/auth/login', (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.status(400).json({ error: 'Name and password are required' })
  }

  let users = []

  const filePath = path.join(__dirname, './data/users.json')
  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  }

  const user = users.find(u => u.name === name && u.password === password)

  if (user) {
    const token = jwt.sign({ name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '1h' })
    return res.status(200).json({ message: 'User logged in', token })
  } else {
    return res.status(401).json({ error: 'Invalid name or password' })
  }
})

app.get('/', (req, res) => {
  const apiKey = req.headers['apikey']

  if (!apiKey) {
    return res.status(401).json({ error: 'API key missing' })
  }

  try {
    const decoded = jwt.verify(apiKey, JWT_SECRET)

    let users = []
    const filePath = path.join(__dirname, './data/users.json')
    if (fs.existsSync(filePath)) {
      users = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }

    res.status(200).json({ users })

  } catch (err) {
    res.status(401).json({ error: 'Invalid API key' })
  }
})


app.listen(PORT, () => {
  console.log(`SimpleStore running on http://localhost:${PORT}`)

})