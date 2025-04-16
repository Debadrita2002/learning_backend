//const fs = require('fs');

//fs.writeFile("ok.txt","okk how are you cutu",function(err){
//    if(err){console.error(err);}
//    else {console.log("done");}
//})
/*fs.readFile("./ok.txt",'utf8',function(err,data){
    if(err){console.error(err);}
    else {console.log(data);}
})

fs.appendFile("ok.txt","now dance....",function(err){
    if(err){console.error(err);}
    else {console.log("done");}
})

fs.rename("ok.txt","hi.txt",function(err){
    if(err){console.error(err);}
    else {console.log("done");}
})
fs.copyFile("hi.txt","./copy/chacha.txt",function(err){
    if(err){console.error(err);}
    else {console.log("done");}
})

fs.unlink("hi.txt",function(err){
    if(err){console.error(err);}
    else {console.log("removed");}
})
fs.rmdir("./copy",{recursive:true},function(err){
    if(err){console.error(err);}
    else {console.log("removed");}
})

const http= require('http');

const server= http.createServer(function(req,res){
     res.end("hello world");
})

server.listen(3000);

const express = require('express')

const app = express()//make blob readable in server side 
app.use(express.json());//make blob readable in the server side //ejs and form

app.use(express.urlencoded({ extended: true}));

//middleware
app.use(function(req,res,next){
    console.log('middleware chala');
    next();
});

app.get('/', (req, res) => {
  res.send('Hello')
})
app.listen(3000)
*/