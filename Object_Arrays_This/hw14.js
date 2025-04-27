console.log(adder(1,1)) // ashxatum e

function adder(a, b){
    return a + b
}
console.log(adder(1,1)) // ashxatum e

console.log(adder2(2,2)) //error

var adder2 = function(a, b) {
    return a + b;
}

console.log(adder2(2,2)) // ashxatum e

console.log(adder3(3,3)) // error

const adder3 = (a, b) => {
    return a + b
}

console.log(adder3(3,3)) // ashxatum e