let Cat = {
    name: "Alex",
    greet: () => {  //chuni this dra hamar ays depqum chenq karox ogtagorcel
        console.log("Hi " + this.name) // this.name undefined
    }
}

Cat.greet()


let Cat2 = {
    name: "Alex",
    greet(){
        console.log("Hi " + this.name) // this.name "Alex"
    }
}

Cat2.greet()