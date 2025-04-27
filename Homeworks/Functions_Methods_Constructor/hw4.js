function Animal(type, name) {
    this.type = type
    this.name = name

    this.describe = function() {
        return console.log("This is a " + this.type + " named " + this.name + ".")
    }
}

let animal = new Animal("dog", "Bob");
let animal1 = new Animal("cat", "James");

animal.describe()
animal1.describe()