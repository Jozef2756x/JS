let arr = ["dorama", "fantasy"]
let arr1 = ["horror", "mystery"]
let arr2 = ["fiction", "history"] 

class books {
    constructor(title, author, year, genres){
    this.title = title
    this.author = author
    this.year = year
    this.genres = genres
    }
}

let book = new books("The Blood Spindle", "Armen", 1996, arr)
let book1 = new books("The Edge of Zion", "Ashot", 1987, arr1)
let book2 = new books("Secret of the Kissing Baker", "Vazgen", 1976, arr2)

arr1.push("classics")
book.year = 1944
delete book2.author

console.log(book,"\n", book1,"\n" , book2)
