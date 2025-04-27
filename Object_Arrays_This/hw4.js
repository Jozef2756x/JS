let arr2 = ["fiction", "history"] 

let book = {
    "Title":"The Blood Spindle",
    "Author": "Armen",
    "Year": 1996,
    "genres": arr2
}

function deepClone(obj){
    return structuredClone(obj)
}

let clone = deepClone(book)

clone.Author = "Ashot"
clone.genres.push("fantasy")

console.log(book)
console.log(clone)
