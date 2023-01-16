class Person {
    constructor(firstName, lastname) {
        this.firstName = firstName
        this.lastName = lastname
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

// making sub class of Person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone
        this.membership = membership
    }

    static getMembershipCost(){
        return 500
    }

    testMethod(){
        return 'test method'
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standart')

console.log(john)
console.log(john.greeting())
console.log(john.testMethod())

console.log(Customer.getMembershipCost())