var fs=require('fs')
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs.writeFileSync('task3.txt',JSON.stringify(shape))
data=fs.readFileSync('task3.txt','utf-8')
let d=JSON.parse(data)
let cp=d[0].diameter*3.14
let sp=d[1].side*4
fs.appendFileSync("data.txt","peri of circle is"+cp+"peri of squire is"+sp)
console.log(cp)
console.log(sp)
