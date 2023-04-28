// const dotenv = require('dotenv')
//
// dotenv.config()
//
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

// const server = http.createServer((req, res) => {
// ----------------------- EXAMPLE 1

const http = require('http')

const server = http.createServer((req, res) => {
    // ----------------------- EXAMPLE 1
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    let response = 'home page'

    if (req.url === '/users') response = '<h1>Hello node js - staring the web server is easy - USERS</h1>'
    if (req.url === '/posts') response = 'POSTS'

    res.end(response)

    // ----------------------- EXAMPLE 2

    // // express, fastify, coa, nest.js - framework types for node js REST API endpoints

    // res.writeHead(200, {'Content-type': 'application/json'})
    //
    // if (req.url === '/users'){
    //     return res.end(JSON.stringify([
    //         {id: 1, name: 'First User'}
    //     ]))
    // }
    //
    // if (req.url === '/posts') return res.end('POSTS')
    //
    // res.end(req.url)
})

server.listen(5001, () => console.log('test'))