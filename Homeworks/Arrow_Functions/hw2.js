obj = {
    method1(){
        console.log(this) //uni this tpum e obj-i this-y
    },
    method2:() => {console.log(this)} //chuni sepakan this vercnum e artaqinic
}

obj.method1()
obj.method2()