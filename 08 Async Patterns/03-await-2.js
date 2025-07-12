// Await Example 2
// fs library can return promises
const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('../content/first.txt', 'utf-8')
        const second = await readFile('../content/second.txt', 'utf-8')
        
        await writeFile(
            '../content/awaitResult2.txt',
            `yup: ${first}, ${second}`
        )
        
        console.log(first, second)
        console.log('first task complete')
    } catch (error) {
        console.log(error)
    }
}

start()