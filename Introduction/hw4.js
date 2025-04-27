const prompt = require('prompt-sync')()

let y = 6
let answer = 0

console.log("Guess the number!")
do{
    answer = Number(prompt("Enter number (1-10) "))
    if(isNaN(answer)) {
        console.log("Please not input string")
        continue
    }
    if(answer > 10 || answer < 0) {
        console.log("Please write numbers 1-10")
        continue
    }
    if(answer > y) {
        console.log("Too high!")
    }else if(answer < y) {
        console.log("Too low!")
    }
}while(answer !== y)

console.log("Congratulations! You guessed the number!")