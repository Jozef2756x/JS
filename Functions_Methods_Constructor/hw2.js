let person = {
    firstName: "Bob ",
    lastName: "Bond",
    age: 32,
    introduce: function(){
        console.log("Hi, I'm " + this.firstName + this.lastName + " and I'm " + this.age + " years old.")
    }
}

person.introduce()