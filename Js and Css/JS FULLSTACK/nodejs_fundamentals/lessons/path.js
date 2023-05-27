const path = require('path')

// в зависимости от OC разные разделители будут
// const joinedPath = path.join('first', 'second', 'third')
//
// console.log(__dirname)
// console.log(__filename)
//
// const backOneTime = path.join(__dirname, '..')
// const backTwoTime = path.join(__dirname, '..', '..')
//
// console.log(joinedPath)
// console.log(backOneTime)
// console.log(backTwoTime)

// непредсказуемая по большей части функция - лучше использовать join
// console.log(path.resolve('first', 'second', 'third'))
//
// let unparsedPath = path.resolve('first', 'second', 'filename.js')
// console.log(path.parse(unparsedPath))
//
// console.log('разделитель в ОС', path.sep)
// console.log('проверка на абсолютный путь', path.isAbsolute('first/second'))
// console.log('название файла', path.basename(unparsedPath))
// console.log('расширение файла', path.extname(unparsedPath))

// -------------------------------------------

const siteUrl = 'https://localhost:8080/users?id=5254'

const url = new URL(siteUrl)

console.log(url)