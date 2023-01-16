class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(dob)
    }

    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y
    }
}

const mary = new Person('Mary', 'Smith', '9-02-70')

console.log(mary.calculateAge())
mary.getsMarried('Jane')

console.log(mary)
console.log(mary.greeting())

// только из класса можно static methods вызвать
console.log(Person.addNumbers(1,2))