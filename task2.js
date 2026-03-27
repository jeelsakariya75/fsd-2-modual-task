// define array of object with proparty name and age write this object in a file name read the file and data of che consale
var fs=require('fs')
obj={"detail":[{"name":"abc","age":23}]}
fs.writeFileSync('S.txt',JSON.stringify(obj))
data=fs.readFileSync('S.txt','utf-8')
console.log(data)
d=JSON.parse(data)
console.log(d.detail[0].name)