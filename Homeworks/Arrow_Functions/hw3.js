let arr = [1, 2, 3, 4, 5]

function double(arr) {
    let arr2 = arr.map(function(element){return element * 2})
    console.log(arr2)
}

const double2 = (arr) => {
    console.log(arr.map(element => element * 2)) //ete funkcia-i mej petq che ogtagorcel this                                               
}                                                // aveli harmar e arrow-y vorovhetev aveli karch e ev harmar e parz funkcianeri hamar  

double(arr)
double2(arr)