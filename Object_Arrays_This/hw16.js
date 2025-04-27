let obj = {
    method1: function met(){
        console.log(this)
    },
    method2: () => {
        console.log(this)
    }
}

obj.method1() //bind e linum objecti het
obj.method2() //isk arrow funkcian chuni ir sepakan this-y ev vercnum e cnoxi(parent scope)-um gtnvox this-y