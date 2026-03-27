// to tack 5 digit saperd by whid space in txt file using short method and print shorted array of this 5 element on mode js servar
var fs=require('fs')
fs.writeFileSync("data.txt","5 3 1 6 9")
data=fs.readFileSync("data.txt","utf-8")
d=data.split(" ").sort()
console.log(d)

// define array of object with proparty name and age write this object in a file name read the file and data of che consale