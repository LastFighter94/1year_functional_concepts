// readable - reading
// writable - writing
// duplex - writing and reading
// transform - same as duplex but can change data while reading

// streams are needed to write files by parts not the whole 100% part
// for example there is a file which weight is 5GB, so we can read some parts of it by streams not the whole part by once

// by default weight of chunk (размер кусочка) === 64kb
// считывание может быть не только файлов - например, передача чего-то по сети или скачивание чего-то по сети

const fs = require('fs')
const path = require('path')

// считали целиком и за один раз
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err){
//         throw err;
//     }
//     console.log(data)
// })

// --------------------------------

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt')) // можно передать [options] - кодировку и так дале
//
// stream.on('data', (chunk) => {console.log(chunk)})
//
// stream.on('open', () => {console.log('start reading')})
// stream.on('end', () => {console.log('stop reading')})
//
// stream.on('error', (e) => {console.log(e)})
// обязательно нужно указать обработку ошибок, иначе может упасть весь node js process



// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
//
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// --------------------------------

const http = require('http')

http.createServer((req, res) => {
    // req = request = readable stream
    // res = response = writable stream

    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

    stream.pipe(res)

    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', chunk => res.end(chunk))
})