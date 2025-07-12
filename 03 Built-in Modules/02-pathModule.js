// Path Modules
const path = require('path')

// path separator
console.log(path.sep)

// input gets normalized (notice the / after /content)
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// base file name
const base = path.basename(filePath)
console.log(base)


// resolve to absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)