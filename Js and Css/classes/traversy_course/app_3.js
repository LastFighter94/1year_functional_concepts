// каждый объект в JS имеет prototype и
// prototype это объект сам по себе

// все объекты наследуют их свойства и методы
// из их prototype

// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

// calculate age - так как этот метод будет
// одинаковый у всех Person
Person.prototype.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name
Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getsMarried = function (newLastName){
    this.lastName = newLastName
}

const yuri = new Person('Yuri', 'Kishko', '2-09-94')
const misha = new Person('Misha', 'Klichko', '2-09-92')
const julia = new Person('Julia', 'Erbanova', '2-09-02')

console.log(yuri)
console.log(yuri.calculateAge())
console.log(misha.getFullName())

console.log()

julia.getsMarried('Kishko')

console.log(julia)

console.log(julia.hasOwnProperty('lastName'))

// this is in the prototype
console.log(julia.hasOwnProperty('getFullName'))