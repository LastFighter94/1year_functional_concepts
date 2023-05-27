const http = require('http')
const EventEmitter = require('events')

// endpoints = {
//     '/user': {
//         'GET': handler1,
//         'POST': handler2,
//         'DELETE': handler3,
//     }
// }

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter()
        this.server = this._createServer()
        this.middlewares = []
    }

    use(middleware){
        this.middlewares.push(middleware)
    }

    listen(port, callback){
        this.server.listen(port, callback)
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach(method => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method]
                    handler(req, res)
                })
            })
        })
    }

    _createServer(){
        return http.createServer((req, res) => {
            // req = readable stream - поэтому, для того чтобы получить тело запроса нам с помощью стрима его необходимо прочитать

            let body = ""

            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                if(body){
                    req.body = JSON.parse(body)
                }
                // только после того как мы закончили читать тело запроса, мы делаем emit соответствующего события

                // по цепочку перед каждым запросом мы вызываем функции middleware
                this.middlewares.forEach(middleware => middleware(req, res))

                // на каждый запрос мы создаем emit, который прописан в методе addRouter
                const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
                if (!emitted){
                    res.end()
                }
            })
        })
    }

    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }
}