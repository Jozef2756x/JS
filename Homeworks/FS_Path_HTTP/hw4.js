const fs = require('fs')

fs.writeFileSync('./permissions.txt', '')

fs.chmodSync('./permissions.txt', fs.constants.S_IRUSR)

try {
    fs.writeFileSync('./permissions.txt', "Hello")
  }
  catch (err) {
    console.log("Error Found, Code:", err.code);
  }