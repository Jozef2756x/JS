const EventEmitter = require('node:events')

const eventEmitter = new EventEmitter()

eventEmitter.on('status', () => {
    console.log('hello')
})

eventEmitter.on('status', () => {
    console.log('world')
})

eventEmitter.emit('status')
