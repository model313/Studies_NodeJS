const {readFile, writeFile} = require('fs');

// need to establish callbacks when using async
// avoid callback hell

readFile('./03 Built-in Modules/content/first.txt', 'utf-8',(err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

