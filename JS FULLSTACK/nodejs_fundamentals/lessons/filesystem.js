const fs= require('fs')
const path = require('path')

// fs doesn't work with 14.21 node

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir1-1', 'dir1-1-1'), {recursive: true})
//
// // async version
//
// console.log('start')
//
// fs.mkdir(path.resolve(__dirname, 'dir2'), (err) => {
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log('folder created')
// })
//
// console.log('end')

// ---------------------------------- delete dirs

// const deleteFolder = (folderName) => {
//     fs.rmdir(path.resolve(__dirname, folderName), (err) => {
//         if (err){
//             throw err
//         }
//     })
// }
//
// // deleteFolder('dir1')
// deleteFolder('dir2')
// deleteFolder('dir')

// ---------------------------------- create file and put something in here

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'sdgsdg sdgkjhsdk sdgjkhsdkjgfhskjd', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('file has been created')
// })
//
// fs.appendFile(path.resolve(__dirname, 'text.txt'), 'добавляем, а не перезаписываем содержимое', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('file has been created')
// })

// ---------------------------------- callback hell

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'sdgsdg sdgkjhsdk sdgjkhsdkjgfhskjd', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('file has been created')
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'добавляем, а не перезаписываем содержимое', (err) => {
//         if (err){
//             throw err
//         }
//         console.log('file has been created')
//     })
// })

// неизвестно с какой версии node появилась возможность снизу

// const fsPromise = require('fs/promise')
//
// fsPromise.mkdir('/').then().catch()
// fsPromise.readFile('/').then().catch()
// fsPromise.writeFile('/').then().catch()
// fsPromise.appendFile('/').then().catch()
// fsPromise.rm('/').then().catch()
// fsPromise.rmdir('/').then().catch()

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err){
                reject(err.message)
            }
            resolve()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err){
                reject(err.message)
            }
            resolve()
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err){
                reject(err.message)
            }
            resolve(data)
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err){
                reject(err.message + 'REMOVE FILE ERROR')
            }
            resolve()
        })
    })
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'some data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '092385092345'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'rrrrrrrr'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file has been deleted!'))

// через переменную окружения мы можем передать текст-строку, его записать в файл
// прочитать этот файл, посчитать количество слов в этом файле и записать их в новый файл
// count.txt - затем удалить первый файл

// cross-env TEXT="random text 1 2 3 4 5 6 7" node .\lessons\filesystem.js

const text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Количество слов ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))