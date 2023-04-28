const Emitter = require('events')

const emitter = new Emitter()

const callback = (data, second, third) => { // with param - event, second param is a callback with infinity number of arguments
    console.log('You have sent message with = ' + data)
    console.log('Second argument = ' + second)
}

emitter.once('message', callback)

// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')

emitter.removeAllListeners()
emitter.removeListener('message', callback)

const dotenv = require('dotenv')

dotenv.config()

const MESSAGE = process.env.message || ''

if (MESSAGE){
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'you did not specify message!')
}