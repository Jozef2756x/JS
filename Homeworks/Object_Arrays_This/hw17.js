function foo(){
    return "foo" //karox enq ogtagorcel kodi cankacac hatvacum qani vor hositing i e entarkvum
}

var foo1 = function (){
    return "foo1"  // minchev ir haytararutyuny klini undefind
}

const foo2 = () => {
    return "foo2" // minchev ir haytararutyuny gtnvum e TDZ um
}

let arr = [foo, foo1, foo2]

for(let fn of arr){
    console.log(fn())
}