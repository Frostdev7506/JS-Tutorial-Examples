class person {
    constructor(name) {
        this.name = name
    }
}

printArrow() {
    setTimeout(() => {
        console.log("Arrow :" + this.name)
    }, 100)
}



let person = new person("Neeraj")
person.printArrow()