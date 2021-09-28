var http = require("http");
var a = 10;
var b = 20;
var c = a + b;
var mymsg = "A value is "+a<br/>+ "B value is "+b<br/>+ "sum is "+c;
http.createServer(function(req,res){
    res.end("<h1>welcome to node js</h1>"+mymsg);
}).listen(3000);
console.log("server is started at http://127.0.0.1:3000");