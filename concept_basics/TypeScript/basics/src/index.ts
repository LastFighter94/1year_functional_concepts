// before tsconfig settings - просто проверка ts config и прочего

// let id = 5 // regular js
// let people: number = 5 // ts

// let shit = '345435345'
// let shit_two = '345435345'

// console.log('test')

// people = '5' 
// vs code gives us error, because variable - peaple
// is not assignable to type 'number'

// но даже без типизации :number при задании
// переменной значения типа number - ошибка возникнет







// basic types
let id: number = 5
let company: string = 'Test string'
let isPublished: boolean = true
let x: any = 'Hello'

let age: number // можно инициализировать переменную без значения

x = true // нет никаких ошибок так как any

let ids: number[] = [1,2,3,4,5] // array that only contains numbers

// let ids_two: number[] = [1,2,3,4,5, true] // error because of 'true'

// ids.push('Hello') 
// will give us an error because 'hello' 
// is not assignable to type 'number'

let arr: any[] = [1, true, 'test']

// так тоже можно
let arr2: Array<any> = [12,345,'dfgkjdflkg']

// ***************

// tuple - with a tuple you can specify the exact types inside of an array
let person: [number, string, boolean] = [1, 'test', true] 
// важно чтобы значения
// совпадали по индексам массива - порядок важен!
// это касается абсолютно всех случаев, кроме :any.

// tuple array
let employee: [number, string][]

employee = [
    [1, 'Misha'],
    [2, 'Vasya'],
    [3, 'Djohn'],
]

let girls: [any, any, any][]

girls = [
    ['Julia', 20, true],
    ['test', 10, 10]
]

// ***************

// unions - if you want a particular variable to hold on more than one type
let pid: string | number = 22

pid = '22'
pid = 22

// ***************

// enums - allows us to define a set if named constants either numeric or string

enum Direction10 {
    Up = 2, 
    Down = 4,
    Left = 6,
    Right = 8
}

console.log(Direction10.Down)
console.log(Direction10[8]) // выведет right

// созданы для ограничения количества значений с которыми мы можем работать
// в той или иной переменной, они задают количество значений и ограничивают сами названия

enum Direction1 {
    Up, // если поменять значение на Up = 1, то остальные будут 2, 3, 4... и так далее
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up', 
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
    // Left = 'Left', // так тоже можно
    // Right = 'Right' // так тоже можно
}
// можно задавать разные типовые значения up=5, down=true и так далее

// by default Up, Down, ... will have values from 0 to 1, 2 e.t.c

console.log(Direction1.Up)
console.log(Direction1[0])
console.log(Direction2.Up)

// еще пример enum https://www.youtube.com/watch?v=xIFVjuAHgFU

const test = (price: number) => price * 3

enum Berry {
    Apple,
    Cherry,
    Peach,
    // Peach = calc(), // так тоже можно
    Melon,
    // Apple = 4,
    // Melon = 4 * Apple // так тоже можно
    Shit = test(3) // и так можно
}

let oneBerry = Berry.Peach
function timeToEat(berry:Berry) { // принимаем что-то по типу Berry
    if(oneBerry === Berry.Peach){
        console.log('Время кушать: Персик', oneBerry)
    } else {
        console.log('Мы на диете')
    }
}

timeToEat(oneBerry)

function calc():number{
    return 5
}

// ***************

// objects объекты
type User = {
    id: number,
    name: string
    // testProp?: string // опциональное значение
}

const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

const user_right_version: User = {
    id: 1,
    name: 'John'
}

// type assertion - explicitely telling the compiler that we want to treat an
// entity as a different type
let cid: any = 1
let customerId = <number>cid

let customerITwo = cid as number



// ***************

// Functions
function addNum(x: number, y: number): number { // здесь мы также задаем значение типа
    // значения при return - иначе типизируем return value
    return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void { // void используется для типизации
    // когда return ничего не возвращает - что в принципе необязательно указывать
    // если вы не хотите напрямую запретить возврат значения из функции
    console.log(message)
}

log('test')



// ***************

// Interfaces - is kind of like a custom type or a specific structure to an
// object or a function 

interface UserInterface {
    readonly id: number, // можно сделать только read-only свойства
    name: string,
    age?: number // так мы можем делать "выборочные" свойства,
    // то есть user1 без age не вызовет ошибку
}


const user1: UserInterface = {
    id: 1,
    name: 'John'
}
// user.id = 5 // так как id = readonly то мы не можем его перезаписывать

// в случае выше когда мы описываем объекты, лучше использовать интерфейс, вместо
// type, но есть некоторые отличия
// к примеру type может быть использован может быть использован с примитивами 
// и Unions, а Interface нельзя в таком случае использовать
type Point = number | string
// interface Point = number | string - не сработает!
const p1: Point = 1


// мы также можем использовать interfaces с функциями
interface MathFunc {
    (x: number, y: number): number
}

const add:MathFunc = (x: number, y:number):number => x + y
const sub:MathFunc = (x: number, y:number):number => x - y


// ***************

// Classes
class Person {
    public test_prop: string 
    // слово public можно убрать и писать без него
    id: number

    private name: string 
    // you can only access this prop inside a class 
    // yury.name - will give error "name is private"

    protected age: number 
    // you can only access this prop within this class
    // or within the class that extends from this class

    // readonly тоже есть! 

    // для определения доступности к свойствам и методам
    // класса есть четыре модификатора доступа
    // private (ни классы наследники, ни объекты созданные
    // с помощью этого класса не имеют доступ к private

    // public (значение по умолчанию)
    // protected (доступ могут получить только наследники, но не
    // экземпляры класса)
    // readonly

    constructor(id: number, name: string, age: number, test_prop: string){
        this.id = id
        this.name = name
        this.age = age
        this.test_prop = test_prop
    }

    register(){
        return `${this.name} is now registered`
    }
}

const yury = new Person(1, 'Yury', 28, 'dfgfd')
const mike = new Person(2, 'Misha', 30, 'dfgdfgdfg')

yury.id = 5

// еще пример

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class PersonTwo implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(): string {
        return `${this.name} is now registered`
    }
}

// subclass
class Employee extends PersonTwo {
    position: string

    static secret = 12345
    // каждый экземпляр получит доступ к этому значению
    // через имяКласса.secret
    
    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Mike', 'Developer')

// еще пример (более короткая запись без this.a = a, и так далее)

class MinPerson {
    static love = 'everything'

    constructor(public name: string, private age: number) {}
}

let minPerson = new MinPerson('Misha', 40)

// ***************

// Generics - used to build reusable components - это как placeholder для 
// Type - который мы прописываем при вызове функции

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

// numArray.push('hello') // error - expects a num
// strArray.push(1) // error - expects a str

// еще пример

function getArrayTwo<T>(items: [T]): T[] {
    return new Array().concat(items)
}

let numArrayTwo = getArrayTwo<number>([1000])
let strArrayTwo = getArrayTwo<string>(['brad'])

// *****************************
// *****************************
// *****************************
// *****************************
// *****************************

// ES5 ананомные функции
// потом JS модули
// в TS совершенно другая схема

// namespace

namespace Utils {
    export const SECRET: number = 12345

    const PI = 3.14

    export const getPass = (name: string, age: number): string => `${name}${age}`

    export const isEmpty = <T>(data: T): boolean => !data
}

const myPass = Utils.getPass('test', 123)
const isSecret = Utils.isEmpty(Utils.SECRET)

const PI = 3 // no errors, const with the same name outside namespace