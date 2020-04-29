const { sum, minus, powerOf} = require('./second-module/math.js')

console.log(sum(2,10))
console.log(minus(2,10))
console.log(powerOf(2,10))

const { concat } = require('./third-module/string.js')

console.log(concat('hello ', 'submodules'))
