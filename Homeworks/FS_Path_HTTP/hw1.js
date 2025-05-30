const fs = require('fs')

if(fs.existsSync('file.txt')){
    console.log(fs.readFileSync('file.txt', 'utf-8'))
}else{
    fs.writeFileSync('file.txt', "This is a newly created file.", 'utf-8')
}


fs.appendFileSync('file.txt', " hello World", 'utf-8')