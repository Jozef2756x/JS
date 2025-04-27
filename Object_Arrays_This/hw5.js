let arr = [1,2,2,3,1]

function arrclr (arr){
    let x = []

    for(let i = 0; i < arr.length; ++i){
        if (x.indexOf(arr[i]) === -1) {
            x.push(arr[i])
        }
    }
    return x
}
console.log(arrclr(arr))