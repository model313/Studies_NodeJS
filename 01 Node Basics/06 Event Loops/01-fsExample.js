const {readFile} = require('fs')

console.log('first task start')
// check file path
readFile('../03 Built-in Modules/content/first.txt', 'utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('first task complete')
})
console.log('ready for next task') 