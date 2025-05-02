let arr = [1,2,3,4,5,6,7,8,9,10]

function customFilter(array, callback){
    let result = []
    for(let i = 0; i < array.length; ++i){
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
    console.log(result)
}

let even = (num) => num % 2 === 0

customFilter(arr,even)