const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'file.txt')

fs.stat(filepath, (err, stats) =>{
    if(err){
        console.log('file is not found')
        return
    }
    console.log(`File size in bytes - ${stats.size} \nCreation date - ${stats.birthtime} \nLast modified date - ${stats.mtime}`)
})