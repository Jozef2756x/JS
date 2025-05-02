let arr = [1, 2, 3, 4, 5]

function customMap(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    console.log(result)
}

let double = (num) => num * 2

customMap(arr, double)

