"use strict";
let id = 5;
let company = 'Test string';
let isPublished = true;
let x = 'Hello';
let age;
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'test'];
let arr2 = [12, 345, 'dfgkjdflkg'];
let person = [1, 'test', true];
let employee;
employee = [
    [1, 'Misha'],
    [2, 'Vasya'],
    [3, 'Djohn'],
];
let girls;
girls = [
    ['Julia', 20, true],
    ['test', 10, 10]
];
let pid = 22;
pid = '22';
pid = 22;
var Direction10;
(function (Direction10) {
    Direction10[Direction10["Up"] = 2] = "Up";
    Direction10[Direction10["Down"] = 4] = "Down";
    Direction10[Direction10["Left"] = 6] = "Left";
    Direction10[Direction10["Right"] = 8] = "Right";
})(Direction10 || (Direction10 = {}));
console.log(Direction10.Down);
console.log(Direction10[8]);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction1[0]);
console.log(Direction2.Up);
const test = (price) => price * 3;
var Berry;
(function (Berry) {
    Berry[Berry["Apple"] = 0] = "Apple";
    Berry[Berry["Cherry"] = 1] = "Cherry";
    Berry[Berry["Peach"] = 2] = "Peach";
    Berry[Berry["Melon"] = 3] = "Melon";
    Berry[Berry["Shit"] = test(3)] = "Shit";
})(Berry || (Berry = {}));
let oneBerry = Berry.Peach;
function timeToEat(berry) {
    if (oneBerry === Berry.Peach) {
        console.log('Время кушать: Персик', oneBerry);
    }
    else {
        console.log('Мы на диете');
    }
}
timeToEat(oneBerry);
function calc() {
    return 5;
}
const user = {
    id: 1,
    name: 'John'
};
const user_right_version = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
let customerITwo = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log('test');
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name, age, test_prop) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.test_prop = test_prop;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const yury = new Person(1, 'Yury', 28, 'dfgfd');
const mike = new Person(2, 'Misha', 30, 'dfgdfgdfg');
yury.id = 5;
class PersonTwo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends PersonTwo {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
Employee.secret = 12345;
const emp = new Employee(3, 'Mike', 'Developer');
class MinPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
MinPerson.love = 'everything';
let minPerson = new MinPerson('Misha', 40);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
function getArrayTwo(items) {
    return new Array().concat(items);
}
let numArrayTwo = getArrayTwo([1000]);
let strArrayTwo = getArrayTwo(['brad']);
var Utils;
(function (Utils) {
    Utils.SECRET = 12345;
    const PI = 3.14;
    Utils.getPass = (name, age) => `${name}${age}`;
    Utils.isEmpty = (data) => !data;
})(Utils || (Utils = {}));
const myPass = Utils.getPass('test', 123);
const isSecret = Utils.isEmpty(Utils.SECRET);
const PI = 3;
