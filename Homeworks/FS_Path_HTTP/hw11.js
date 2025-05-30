const EventEmitter = require('node:events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greeting', () => {
    console.log('Hello, World!')
  })

eventEmitter.emit('greeting')