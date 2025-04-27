let arr = ['a','b','c','d','e']

function arr_cut(arr, size){
    let arr2 = []
    
    for(let i = 0; i < arr.length; i+= size){
        arr2.push(arr.slice(i, i+size))
    }
    return arr2
}

console.log(arr_cut(arr, 2))