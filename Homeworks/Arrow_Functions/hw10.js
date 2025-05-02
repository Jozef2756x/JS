let arr = [1, 2, 3, 4, 5]

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

element = (element) => console.log(`Value ${element}`)

customForEach(arr, element)
