let arr = [[1, 2], ['a', 'b'], [true, false]]

function arr_conc(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length / 2; ++i) {
        let tuple = []
        for (let j = 0; j < arr.length; ++j) {
            tuple.push(arr[j][i])
        }
        arr2.push(tuple)
    }

    return arr2
}

console.log(arr_conc(arr))
