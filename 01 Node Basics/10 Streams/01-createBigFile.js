// When reading large files it is better to use streams
// This file creates a large file for future examples

const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('../content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}