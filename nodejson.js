const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('staff.json'))
var data = readFileSync('staff.json')
console.log(JSON.parse(data)['staff'][0])
module.exports = {loadjson};