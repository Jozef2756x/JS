const prompt = require('prompt-sync')()

for(let i = 0; i <= 20; ++i){
    console.log(i)
}

let i = 1
while(i != 21){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}
let answer = 0
do{
    answer = Number(prompt("Enter number "))
}while(answer !== 0)