const names = require('./names.js')
const sayHi = require('./utils.js')
const data = require('./alternativeSyntax.js')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(data)

// this will run the file
require('./mindGrenade.js')