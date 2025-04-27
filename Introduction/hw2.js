const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = rl.question("Enter your age ", (answer) => {

if (answer < 18){
    console.log("You are a minor.")
}
else if(answer >= 18 && answer < 65){
    console.log("You are an adult.")
}
else if (answer >= 65){
    console.log("You are a senior citizen.")
}

rl.close()
})