//this is data,append data this is data abc to pqr txt,
fs=require('fs')
fs.writeFile('abc.txt','this is data',function(err){
    if(err) throw err
    console.log("write done")
})
fs.appendFile("abc.txt","that is data",function(err){
    if(err) throw err
    console.log("append done")
})
fs.copyFile("abc.txt","utf-8",function(){
    fs.readFile("Pqr.txt","utf-8",function(err,data){
        fs.unlink("abc.txt",function(err){
            if(err) throw err
            console.log("copy done")
        })
    })
})