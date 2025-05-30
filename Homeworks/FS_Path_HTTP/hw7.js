const path = require('path')

const filepath = path.join(__dirname, __filename)

const parsed = path.parse(filepath)

console.log('directory: ' + parsed.dir)
console.log('name: ' + parsed.name)
console.log('extension: ' + parsed.ext)