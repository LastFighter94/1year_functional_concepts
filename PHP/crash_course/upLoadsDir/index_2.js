// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
        // get(obj, prop){
        //     if (prop in obj){return obj[prop]}else{return defaultValue} 
        // }
    })
}

const position = withDefaultValue(
    {
    x: 24,
    y: 42
    },
    0
)

console.log(position)

// если обратимся к position.a 
// получим не ошибку а defaultValue



// Hidden Properties
// функия обертка для объекта, которая будет 
// прятать определенные свойства, которые мы сами укажем

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWit(prefix)),
        // Reflect встроенный класс
        // здесь он помогает собственные ключи объекта получить в виде массива строк ключей
        get: (obj, prop, receiver) => (prop in receiver) 
            ? obj[prop]
            : undefined // void 0
        // receiver это Proxy который мы возвращаем, тот самый объект с 
        // которым мы ведем работу
    })
}
// data._uid выведет undefined, потому что hidden props
// _uid in data также вернет false
// Objects.keys(data) выведет все ключи кроме _uid

const data = withHiddenProps({
    name: 'Yury',
    age: 28,
    _uid: '123456'
})



// Optimization
const userData = [
    {id: 11, name: 'Name', job: 'Job', age: 25},
    {id: 22, name: 'Name2', job: 'Job2', age: 26},
    {id: 33, name: 'Name3', job: 'Job3', age: 27},
    {id: 44, name: 'Name4', job: 'Job4', age: 28},
]

// const index = {}
// userData.forEach(i => (index[i.id] = i))
// // сделали объект у которого ключ i.id = объекту из массива userData по id

const IndexedArray = new Proxy(Array, { // проксируем класс Array
    // construct - срабатываем на ключевое слово new
    construct(target, [args]){
        const index = {}
        args.forEach(item => index[item.id] = item)

        return new Proxy(new target(...args), {
            get(arr, prop){
                switch (prop){
                    case 'push': 
                    return item => {
                        index[item.id] = item
                        arr['prop'].call(arr, item)
                    }
                    case 'findById': return id => index[id]
                    default: return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray(userData)