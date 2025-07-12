const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// Order matters (listen then emit)

customEmitter.on('response',(name,id) => {
    console.log(`Data recieved. User: ${name} with ID: ${id}`)
})

// Multiple listeners are possible
customEmitter.on('response',() => {
    console.log(`Some other logic here `)
})

customEmitter.emit('response','John', 34)
