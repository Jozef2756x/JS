const EventEmitter = require('node:events')

const eventEmitter = new EventEmitter()

function showMessage() {
  console.log('hello world')
}

eventEmitter.on('message', showMessage)

eventEmitter.emit('message')

eventEmitter.removeListener('message', showMessage)

eventEmitter.emit('message')
