const fs = require('fs')

fs.writeFileSync('file.txt', 'a'.repeat(100_000_000))

console.time('Sync-read')
const data = fs.readFileSync('./file.txt', 'utf8')
console.log(`Sync read: ${data.length} characters`)
console.timeEnd('Sync-read')

console.time('Async-read')
fs.readFile('./file.txt', 'utf-8', (err, data) =>{
    console.log(`Async read: ${data.length} characters`)
})
console.timeEnd('Async-read')