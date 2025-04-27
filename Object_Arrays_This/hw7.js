let arr = [1, [2, [3, [4]], 5]]

function arr_cls(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; ++i){
        if(Array.isArray(arr[i])){
            arr2.push(...arr_cls(arr[i]))
        }else{
            arr2.push(arr[i])
        }
    }
    return arr2
}

console.log(arr_cls(arr))