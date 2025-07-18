const express = require('express')
const settings = require('./utils/config')

const app = express()

app.use(express.json())

app.listen(settings.port, () => {
    console.log(`Server is started on ${settings.port} port`)
})