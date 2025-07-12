const {readFile, writeFile} = require('fs');

// need to establish callbacks/promises/async+await when using async
// avoid callback hell

// this here be callback hell
console.log('start')
readFile('./03 Built-in Modules/content/first.txt', 'utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./03 Built-in Modules/content/second.txt', 'utf-8',(err,result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './03 Built-in Modules/content/resultAsync.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if (err) {
                    console.log(err)
                    return
                }
                // result here will be undefined
                console.log('done task')
            }
        )
    })
})
console.log('ready for next task')
