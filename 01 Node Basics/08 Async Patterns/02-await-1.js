// Await Example 1
const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await readFilePromise('../content/first.txt', 'utf-8')
        const second = await readFilePromise('../content/second.txt', 'utf-8')
        
        await writeFilePromise(
            '../content/awaitResult.txt',
            `yup: ${first}, ${second}`
        )
        
        console.log(first, second)
        console.log('first task complete')
    } catch (error) {
        console.log(error)
    }
}

start()