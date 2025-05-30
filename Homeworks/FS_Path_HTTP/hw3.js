const fs = require('fs')

if(!fs.existsSync('./test-directory')){
    fs.mkdirSync('./test-directory')
}

fs.writeFileSync('./test-directory/test.txt', '')

console.log(fs.readdirSync('./test-directory'))

fs.rmSync('./test-directory/test.txt')
fs.rmdirSync('./test-directory')