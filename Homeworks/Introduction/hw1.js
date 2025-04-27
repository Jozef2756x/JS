let str = "Chlp"       // Hov jan es mihaty lav chem haskace incha uzum senc em gre
let num = 16
let bool = true
let nul = null
let undef

console.log(str, "Type:", typeof str)

console.log(num, "Type:", typeof num)

console.log(bool, "Type:", typeof bool)

console.log(nul, "Type:", typeof nul)

console.log(undef, "Type:", typeof undef)

let arr1 = [..."banan"]
let arr2 = [..."nanba"]

let a =[...new Set(arr1)]
let b =[...new Set(arr1)]

function anagram(a,b){
    if(a.length !== b.length){
        console.log("NO")
        return false
    }else{
        a.sort()
        b.sort()
        for(let i = 0; i < a.length; ++i){
            if(a[i] !== b[i]){
                console.log("NO")
                return false
            }
        }
        console.log("Yes")
    }
}

anagram(a,b)

