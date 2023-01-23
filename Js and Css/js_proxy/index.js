// Objects
const person = {
    name: 'Yury',
    age: 28,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop){
        // console.log('Target', target)
        // console.log('Prop', prop)

        if (!(prop in target)){
            return prop.split('_').map(p => target[p]).join(' ')
        }
        return target[prop]
    },
    set(target, prop, value){
        if (prop in target){
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target!`)
        }
    },
    has(target, prop){
        return ['age', 'name', 'job'].includes(prop) // 'name' in op TRUE
        // return ['age', 'job'].includes(prop) // 'name' in op FALSE
    },
    deleteProperty(target, prop){
        console.log('Deleting', prop)
        delete target[prop]
        return true
    }
})
// данный прокси повторяет функционал объекта
// op.name, op.age
// однако можно еще логировать данные

// первый параметр в конструкторе Proxy = target
// второй - handlers, методы, которые позволяют сделать ловушки
// в данном случае для объектов

// вся идея прокси заключается в реализации "ловушек" для переписания базового функционала



// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args){
        // console.log(target)
        // console.log(thisArg)
        // console.log(args)

        console.log('Calling fn...')
        return target.apply(thisArg, args).toUpperCase()
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args){
        console.log('Construct...')

        // return new target(...args)
        return new Proxy(new target(...args), {
            get(t, prop){
                console.log(`Getting prop ${prop}`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Max', 30)