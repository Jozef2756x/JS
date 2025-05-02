function foo(a,b){
    console.log(arguments) //unen  arguments object vortex pahvum e irenc poxancac arjeqy
}

foo2 = (a,b) => {console.log(arguments)} //chuni arguments dra hamar referenceerror

foo(1,2)
foo2(3,4)

foo3 = (...args) => {console.log(args)} //alternativ tarberak

foo3(5,6)