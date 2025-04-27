let person = {
    showThis: function(){
        console.log(this) // ktpi person obyekty
    }
}

person.showThis() //kkanchi methody ev ktpi amboxch obyekty

let foo = person.showThis()

foo() // web-i mej kta window, strict mode-ov undefind isk sovorakan vichakum uxaki error