var a = 1; let b = 2; const c = 3 //var-y function scope e ev entarkvum e hoisting isk let,const-block scope dra hamar ynknum en TDZ

console.log(a,b,c) //ktpi 1,2,3

function foo(){
    console.log(a) // undefind qani vor var-ov e haytararvac uxaki ays toxic araj grvum e var a;
    // console.log(b) error minchev haytararely chi kareli tpel
    // console.log(c) error minchev haytararely chi kareli tpel

    var a = 4; let b = 5; const c = 6;

    console.log(a,b,c) // ktpi 4,5,6
}

foo()

console.log(a,b,c) // ktpi 1,2,3 qani vor funkciayi mej stexcvac popoxakanery chen azdum drsi popoxakanneri vra