const {readFileSync, writeFileSync} = require('fs');
console.log('start')

// when running this file, the terminal will consider Studies_NodeJS as the base folder
const first = readFileSync('./03 Built-in Modules/content/first.txt','utf-8')
const second = readFileSync('./03 Built-in Modules/content/second.txt','utf-8')

// creates a new file, will overwrite existing file by default
writeFileSync(
    './03 Built-in Modules/content/resultSync.txt',
    `Here is the result: ${first}, ${second}`,
    // disable overwrite, adds new values
    //{ flag: 'a' }
)

console.log('done')
console.log('start next')