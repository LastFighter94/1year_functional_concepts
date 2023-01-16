// String

// const name = 'Jeff'
// const name2 = new String('Jeff')
//
// // name2.foo = 'bar'
// console.log(name2)
//
// console.log(typeof name)
// console.log(typeof name2)
//
// if(name === 'Jeff'){
//     console.log('YES')
// } else {
//     console.log('NO')
// }
//
// if(name2 === 'Jeff'){
//     console.log('YES')
// } else {
//     console.log('NO')
// }
//
// if(name == 'Jeff'){
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// Number
const num1 = 5
const num2 = new Number(5)

console.log(num2)
console.log(typeof num2)

// Boolean
const bool1 = true
const bool2 = new Boolean(true)

console.log(bool2)
console.log(typeof bool2)

// Function
const getSum1 = function(x, y){
    return x + y
}

const getSum2 = new Function('x', 'y', 'return 1 + 1')

console.log(getSum1(1,1))
console.log(getSum2(1,1))

// Objects
const john = {
    name: 'john'
}

const john2 = new Object({name: 'John'})

console.log(john)
console.log(john2)

// Arrays
const arr1 = [1,2,3,4,5,6]
const arr2 = new Array(1,2,3,4,5,6)

console.log(arr1)
console.log(arr2)

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+')

console.log(re2)