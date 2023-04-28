// обычно middleWare принимает в себя request, response и некоторую функцию next

module.exports = (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.send = (data) => {
        console.log(data, 'data')
        res.end(JSON.stringify(data))
    }

    console.log('Middleware - подключили res.writeHead && res.send(data) - функцию для отправки данных с backend и на backend')
}