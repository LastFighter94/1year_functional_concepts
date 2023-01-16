// Person constructor

// // example 1
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this)
// }
//
// // this refers to the current instance of the object
//
// console.log(this)
// // when "this" is used in global scope, it refers to the
// // window...
// // this.alert(1)
//
// const yuri = new Person('yuri', 38)
// const john = new Person('john', 27)
//
// // console.log(yuri)
// // console.log(john)

// // example 2
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

const yuri = new Person('Yuri', '2-09-1994')
console.log(yuri.calculateAge())