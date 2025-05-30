const EventEmitter = require('node:events')

const eventEmitter = new EventEmitter()

eventEmitter.once('click', () => {
    console.log("Clicked once!")
})

eventEmitter.emit('click')
eventEmitter.emit('click')
